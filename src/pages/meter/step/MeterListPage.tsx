import { useMemo, useState } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Button,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";

/* ------------------ TYPES ------------------ */
type Meter = {
  id: string;
  meterName: string;
  assetName: string;
  assetId: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockMeters: Meter[] = [
  {
    id: "1",
    meterName: "Anchor 2",
    assetName: "Duplicate of Kotak Printer",
    assetId: "AST-00009",
  },
  {
    id: "2",
    meterName: "Anchor 1",
    assetName: "Lenovo Thinkpad",
    assetId: "AST-00004",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Meter>[] = [
  {
    key: "meterName",
    header: "Meter Name",
    width: 180,
  },
  {
    key: "assetName",
    header: "Asset Name",
    width: 260,
    render: (row) => (
      <Link
        href="#"
        underline="hover"
        sx={{
          color: "#2563EB",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {row.assetName}
      </Link>
    ),
  },
  {
    key: "assetId",
    header: "Asset Id",
    width: 160,
  },
  {
    key: "action",
    header: "Actions",
    width: 120,
    render: () => (
      <IconButton
        size="small"
        sx={{
          color: "#6B7280",
          "&:hover": {
            backgroundColor: "#F3F4F6",
            color: "#111827",
          },
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ),
  },
];

const MeterListPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  /* ------------------ FILTER / SORT ------------------ */
  const filteredMeters = useMemo(() => {
    let meters = [...mockMeters];

    if (search) {
      meters = meters.filter((m) =>
        Object.values(m).join(" ").toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sortBy !== "default") {
      meters.sort((a: any, b: any) => a[sortBy].localeCompare(b[sortBy]));
    }

    return meters;
  }, [search, sortBy]);

  return (
    <>
      {/* ------------------ TOOLBAR ------------------ */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {/* Search */}
        <TextField
          placeholder={`Search ${filteredMeters.length} records...`}
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 320 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: "#9CA3AF" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Filters */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            select
            label="Sort By"
            size="small"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            sx={{ width: 200 }}
          >
            <MenuItem value="default">Sort by (Default)</MenuItem>
            <MenuItem value="meterName">Meter Name</MenuItem>
            <MenuItem value="assetName">Asset Name</MenuItem>
            <MenuItem value="assetId">Asset Id</MenuItem>
          </TextField>

          <IconButton
            sx={{
              border: "1px solid #D1D5DB",
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
            }}
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<Meter>
        columns={columns}
        data={filteredMeters}
        getRowId={(row) => row.id}
        emptyText="No meters found"
      />
    </>
  );
};

export default MeterListPage;
