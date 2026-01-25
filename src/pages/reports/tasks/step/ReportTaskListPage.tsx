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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

/* ------------------ TYPES ------------------ */
type Task = {
  id: string;
  sno: number;
  name: string;
  taskId: string;
  assignedTo: string;
  dueDate: string;
  assignedOn: string;
  status: "Open" | "Closed";
  priority: "High" | "Medium" | "Low";
};

/* ------------------ MOCK DATA ------------------ */
const mockTasks: Task[] = [
  {
    id: "1",
    sno: 1,
    name: "Keyboard problem",
    taskId: "TSK-00011",
    assignedTo: "Kishor R",
    dueDate: "30/01/2026",
    assignedOn: "24/01/2026 18:53",
    status: "Open",
    priority: "High",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Task>[] = [
  { key: "sno", header: "S.No", width: 80 },
  { key: "name", header: "Name", width: 260 },
  { key: "taskId", header: "Task Id", width: 160 },
  { key: "assignedTo", header: "Assigned To", width: 180 },
  { key: "dueDate", header: "Due Date", width: 160 },
  { key: "assignedOn", header: "Assigned On", width: 200 },
  {
    key: "status",
    header: "Status",
    width: 140,
    render: (row) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
        <LockOutlinedIcon fontSize="small" sx={{ color: "#3B82F6" }} />
        <Box
          sx={{
            color: "#3B82F6",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {row.status}
        </Box>
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
            row.priority === "High"
              ? "#FEE2E2"
              : row.priority === "Medium"
                ? "#FEF3C7"
                : "#DCFCE7",
          color:
            row.priority === "High"
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

const ReportTaskListPage = () => {
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    if (!search) return mockTasks;

    return mockTasks.filter((t) =>
      Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredTasks.length} records...`}
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
          }}
        >
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<Task>
        columns={columns}
        data={filteredTasks}
        getRowId={(row) => row.id}
        emptyText="No tasks found"
      />
    </>
  );
};

export default ReportTaskListPage;
