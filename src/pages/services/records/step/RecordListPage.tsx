import { useMemo, useState } from "react";
import ReusableTable from "../../../../components/common/table/ReusableTable";
import type { Column } from "../../../../components/common/table/types";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/* ------------------ TYPES ------------------ */
type Record = {
  id: string;
  sno: number;
  title: string;
  count: number;
  serviceNumber: string;
  serviceType: string;
  serviceBy: string;
  status: "New" | "Completed";
  serviceDate: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockRecords: Record[] = [
  {
    id: "1",
    sno: 1,
    title: "LaptopService",
    count: 1,
    serviceNumber: "SVC-00003",
    serviceType: "RegularCheck",
    serviceBy: "Internal",
    status: "New",
    serviceDate: "22/01/2026",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Record>[] = [
  {
    key: "expand",
    header: "",
    width: 50,
    render: () => (
      <ChevronRightIcon sx={{ color: "#64748B" }} fontSize="small" />
    ),
  },
  { key: "sno", header: "S.No", width: 80 },
  {
    key: "title",
    header: "Title",
    width: 260,
    render: (row) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Link
          component="button"
          underline="none"
          sx={{
            color: "#2563EB",
            fontWeight: 500,
          }}
          onClick={() => console.log("View record:", row.title)}
        >
          {row.title}
        </Link>
        <Chip
          label={row.count}
          size="small"
          sx={{
            backgroundColor: "#6366F1",
            color: "#FFFFFF",
            fontSize: 12,
            height: 22,
            fontWeight: 500,
          }}
        />
      </Box>
    ),
  },
  { key: "serviceNumber", header: "Service Number", width: 180 },
  { key: "serviceType", header: "Service Type", width: 180 },
  { key: "serviceBy", header: "Service By", width: 160 },
  {
    key: "status",
    header: "Status",
    width: 140,
    render: (row) => (
      <Box sx={{ color: "#2563EB", fontWeight: 500 }}>{row.status}</Box>
    ),
  },
  { key: "serviceDate", header: "Service Date", width: 160 },
  {
    key: "action",
    header: "Actions",
    width: 120,
    render: () => (
      <IconButton size="small" sx={{ color: "#334155" }}>
        <EditOutlinedIcon fontSize="small" />
      </IconButton>
    ),
  },
];

/* ------------------ PAGE ------------------ */
const RecordListPage = () => {
  const [search, setSearch] = useState("");

  const filteredRecords = useMemo(() => {
    if (!search) return mockRecords;

    return mockRecords.filter((r) =>
      Object.values(r).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      {/* ------------------ TOOLBAR ------------------ */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          p: 2,
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <TextField
          size="small"
          placeholder={`Search ${filteredRecords.length} records...`}
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

        <IconButton
          sx={{
            border: "1px solid #D1D5DB",
            borderRadius: 2,
            backgroundColor: "#FFFFFF",
            color: "#6B7280",
          }}
        >
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<Record>
        columns={columns}
        data={filteredRecords}
        getRowId={(row) => row.id}
        emptyText="No records found"
      />
    </>
  );
};

export default RecordListPage;
