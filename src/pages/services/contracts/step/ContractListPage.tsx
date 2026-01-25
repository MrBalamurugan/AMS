import { useMemo, useState } from "react";
import ReusableTable from "../../../../components/common/table/ReusableTable";
import type { Column } from "../../../../components/common/table/types";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

/* ------------------ TYPES ------------------ */
type Contract = {
  id: string;
  sno: number;
  contract: string;
  vendor: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Expired" | "Pending";
};

/* ------------------ MOCK DATA ------------------ */
const mockContracts: Contract[] = [
  {
    id: "1",
    sno: 1,
    contract: "Annual Maintenance Contract",
    vendor: "ABC Services",
    startDate: "01/01/2026",
    endDate: "31/12/2026",
    status: "Active",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Contract>[] = [
  { key: "sno", header: "S.No", width: 80 },
  { key: "contract", header: "Contract", width: 320 },
  { key: "vendor", header: "Vendor", width: 220 },
  { key: "startDate", header: "Start Date", width: 160 },
  { key: "endDate", header: "End Date", width: 160 },
  {
    key: "status",
    header: "Status",
    width: 160,
    render: (row) => (
      <Chip
        label={row.status}
        size="small"
        sx={{
          backgroundColor:
            row.status === "Active"
              ? "#DCFCE7"
              : row.status === "Pending"
                ? "#FEF3C7"
                : "#FEE2E2",
          color:
            row.status === "Active"
              ? "#15803D"
              : row.status === "Pending"
                ? "#D97706"
                : "#DC2626",
          fontWeight: 500,
          fontSize: 13,
          height: 26,
          borderRadius: 1.5,
        }}
      />
    ),
  },
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
const ContractListPage = () => {
  const [search, setSearch] = useState("");

  const filteredContracts = useMemo(() => {
    if (!search) return mockContracts;

    return mockContracts.filter((c) =>
      Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredContracts.length} records...`}
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
      <ReusableTable<Contract>
        columns={columns}
        data={filteredContracts}
        getRowId={(row) => row.id}
        emptyText="No contracts found"
      />
    </>
  );
};

export default ContractListPage;
