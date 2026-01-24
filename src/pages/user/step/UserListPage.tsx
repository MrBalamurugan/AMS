import { useState, useMemo } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Chip,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

type User = {
  id: string;
  userName: string;
  email: string;
  role: string;
  phone: string;
  status: "Active" | "Inactive";
};

/* ------------------ MOCK DATA ------------------ */
const mockUsers: User[] = [
  {
    id: "1",
    userName: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    phone: "+1 234 567 8901",
    status: "Active",
  },
  {
    id: "2",
    userName: "Jane Miller",
    email: "jane.miller@example.com",
    role: "Editor",
    phone: "+1 234 567 8902",
    status: "Inactive",
  },
  {
    id: "3",
    userName: "Robert Brown",
    email: "robert.brown@example.com",
    role: "Viewer",
    phone: "+1 234 567 8903",
    status: "Active",
  },
  {
    id: "4",
    userName: "Steve Miller",
    email: "steve.miller@example.com",
    role: "Editor",
    phone: "+1 234 567 8902",
    status: "Inactive",
  },
  {
    id: "5",
    userName: "Lucas Brown",
    email: "lucas.brown@example.com",
    role: "Viewer",
    phone: "+1 234 567 8903",
    status: "Active",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<User>[] = [
  { key: "userName", header: "User Name", width: 180 },
  { key: "email", header: "Email", width: 240 },
  { key: "phone", header: "Phone", width: 160 },
  { key: "role", header: "Role", width: 120 },
  {
    key: "status",
    header: "Status",
    width: 120,
    render: (row) => (
      <Chip
        label={row.status}
        sx={{
          backgroundColor: row.status === "Active" ? "#10B981" : "#E5E7EB",
          color: row.status === "Active" ? "#FFFFFF" : "#6B7280",
          fontWeight: 500,
          fontSize: 13,
          height: 26,
          borderRadius: 1.5,
        }}
        size="small"
      />
    ),
  },
  {
    key: "action",
    header: "Action",
    width: 140,
    render: (_row) => (
      <Button
        size="small"
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#6366F1",
          borderColor: "#E0E7FF",
          backgroundColor: "#EEF2FF",
          fontSize: 13,
          fontWeight: 500,
          px: 2,
          py: 0.5,
          borderRadius: 1.5,
          "&:hover": {
            backgroundColor: "#E0E7FF",
            borderColor: "#C7D2FE",
          },
        }}
      >
        EDIT
      </Button>
    ),
  },
];

const UserListPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  /* ------------------ FILTER / SORT ------------------ */
  const filteredUsers = useMemo(() => {
    let users = [...mockUsers];

    // Search
    if (search) {
      users = users.filter((u) =>
        Object.values(u).join(" ").toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort
    if (sortBy !== "default") {
      users.sort((a: any, b: any) => a[sortBy].localeCompare(b[sortBy]));
    }

    return users;
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
          placeholder={`Search ${filteredUsers.length} records...`}
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: 320,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#FFFFFF",
              "& fieldset": {
                borderColor: "#D1D5DB",
              },
              "&:hover fieldset": {
                borderColor: "#9CA3AF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6366F1",
              },
            },
          }}
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
            sx={{
              width: 200,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF",
                "& fieldset": {
                  borderColor: "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: "#9CA3AF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6366F1",
                },
              },
            }}
          >
            <MenuItem value="default">Sort by (Default)</MenuItem>
            <MenuItem value="userName">User Name</MenuItem>
            <MenuItem value="role">Role</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </TextField>

          <IconButton
            sx={{
              border: "1px solid #D1D5DB",
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
              color: "#6B7280",
              "&:hover": {
                backgroundColor: "#F9FAFB",
                borderColor: "#9CA3AF",
              },
            }}
            onClick={() => console.log("Download clicked")}
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<User>
        columns={columns}
        data={filteredUsers}
        getRowId={(row) => row.id}
        emptyText="No users found"
      />
    </>
  );
};

export default UserListPage;
