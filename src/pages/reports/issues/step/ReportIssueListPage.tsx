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

/* ------------------ TYPES ------------------ */
type Issue = {
  id: string;
  sno: number;
  description: string;
  assetName: string;
  recordedBy: string;
  recordedDate: string;
  status: "Task Created" | "In Progress" | "Resolved";
  priority: "Critical" | "High" | "Medium" | "Low";
};

/* ------------------ MOCK DATA ------------------ */
const mockIssues: Issue[] = [
  {
    id: "1",
    sno: 1,
    description: "Keyboard problem",
    assetName: "LENOVO THINK PAS",
    recordedBy: "Kishor R",
    recordedDate: "24/01/2026",
    status: "Task Created",
    priority: "Critical",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Issue>[] = [
  { key: "sno", header: "S.No", width: 80 },
  { key: "description", header: "Description", width: 300 },
  { key: "assetName", header: "Asset Name", width: 260 },
  { key: "recordedBy", header: "Recorded By", width: 180 },
  { key: "recordedDate", header: "Recorded Date", width: 180 },
  {
    key: "status",
    header: "Status",
    width: 180,
    render: (row) => (
      <Box
        sx={{
          color: "#F97316", // orange
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        {row.status}
      </Box>
    ),
  },
  {
    key: "priority",
    header: "Priority",
    width: 140,
    render: (row) => (
      <Chip
        label={row.priority}
        size="small"
        sx={{
          backgroundColor:
            row.priority === "Critical"
              ? "#FFEDD5"
              : row.priority === "High"
                ? "#FEE2E2"
                : row.priority === "Medium"
                  ? "#FEF3C7"
                  : "#DCFCE7",
          color:
            row.priority === "Critical"
              ? "#EA580C"
              : row.priority === "High"
                ? "#DC2626"
                : row.priority === "Medium"
                  ? "#D97706"
                  : "#15803D",
          fontWeight: 500,
          fontSize: 13,
          height: 26,
          borderRadius: 1.5,
        }}
      />
    ),
  },
];

/* ------------------ PAGE ------------------ */
const ReportIssueListPage = () => {
  const [search, setSearch] = useState("");

  const filteredIssues = useMemo(() => {
    if (!search) return mockIssues;

    return mockIssues.filter((i) =>
      Object.values(i).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredIssues.length} records...`}
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
          onClick={() => console.log("Download clicked")}
        >
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<Issue>
        columns={columns}
        data={filteredIssues}
        getRowId={(row) => row.id}
        emptyText="No issues found"
      />
    </>
  );
};

export default ReportIssueListPage;
