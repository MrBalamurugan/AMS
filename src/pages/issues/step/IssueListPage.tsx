import { useMemo, useState } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import type { Column } from "../../../components/common/table/types";

export type Issue = {
  id: string;
  sno: number;
  description: string;
  assetName: string;
  recordedBy: string;
  recordedDate: string;
  status: "Task Created" | "Acknowledged" | "New";
  priority: "Critical" | "HighCritical";
};

const mockIssues: Issue[] = [
  {
    id: "1",
    sno: 1,
    description: "keyboard problem",
    assetName: "LENOVO THINK PAS",
    recordedBy: "Kishor R",
    recordedDate: "24/01/2026",
    status: "Task Created",
    priority: "Critical",
  },
  {
    id: "2",
    sno: 2,
    description: "test",
    assetName: "Test",
    recordedBy: "Kishor R",
    recordedDate: "22/01/2026",
    status: "Task Created",
    priority: "Critical",
  },
  {
    id: "3",
    sno: 3,
    description: "Keyboard problem",
    assetName: "Laptop",
    recordedBy: "Kishor R",
    recordedDate: "22/01/2026",
    status: "Task Created",
    priority: "Critical",
  },
  {
    id: "4",
    sno: 4,
    description: "keyboard not working",
    assetName: "Sandisk Pendrive 128GB",
    recordedBy: "Kishor R",
    recordedDate: "21/01/2026",
    status: "Acknowledged",
    priority: "HighCritical",
  },
];

const issueColumns: Column<Issue>[] = [
  { key: "sno", header: "S.No", width: 80 },

  {
    key: "description",
    header: "Description",
    width: 260,
    render: (row) => (
      <Link
        component="button"
        underline="none"
        sx={{ color: "#0EA5E9", fontWeight: 500 }}
        onClick={() => console.log("View issue:", row.description)}
      >
        {row.description}
      </Link>
    ),
  },

  { key: "assetName", header: "Asset Name", width: 240 },
  { key: "recordedBy", header: "Recorded By", width: 180 },
  { key: "recordedDate", header: "Recorded Date", width: 160 },

  {
    key: "status",
    header: "Status",
    width: 160,
    render: (row) => (
      <Box
        sx={{
          color:
            row.status === "Acknowledged"
              ? "#22C55E"
              : row.status === "New"
                ? "#2563EB"
                : "#F97316",
          fontWeight: 500,
        }}
      >
        {row.status}
      </Box>
    ),
  },

  {
    key: "priority",
    header: "Priority",
    width: 160,
    render: (row) => (
      <Box
        sx={{
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          width: "fit-content",
          fontSize: 13,
          fontWeight: 500,
          color: row.priority === "HighCritical" ? "#DC2626" : "#F97316",
          backgroundColor:
            row.priority === "HighCritical" ? "#FEE2E2" : "#FFEDD5",
        }}
      >
        {row.priority}
      </Box>
    ),
  },
];

/* ------------------ PAGE ------------------ */
const IssueListPage = () => {
  const [search, setSearch] = useState("");

  const filteredIssues = useMemo(() => {
    if (!search) return mockIssues;
    return mockIssues.filter((i) =>
      Object.values(i).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      {/* Toolbar */}
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
        >
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Box>

      <ReusableTable<Issue>
        columns={issueColumns}
        data={filteredIssues}
        getRowId={(row) => row.id}
        emptyText="No issues found"
      />
    </>
  );
};

export default IssueListPage;
