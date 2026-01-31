import { useMemo, useState } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";

import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Link,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useUsers } from "@/features/user/hook/useUsers";

/* ---------------- TYPES ---------------- */
type User = {
  id: string;
  userName: string;
  email: string;
  role: string;
  phone: string;
  status: "Active" | "Inactive";
};

/* ---------------- COLUMNS ---------------- */
const columns: Column<User>[] = [
  {
    key: "userName",
    header: "Name",
    width: 200,
    render: (row) => (
      <Link underline="none" sx={{ color: "#0EA5E9", fontWeight: 500 }}>
        {row.userName}
      </Link>
    ),
  },
  { key: "email", header: "Email", width: 260 },
  { key: "phone", header: "Phone Number", width: 200 },
  {
    key: "status",
    header: "Status",
    width: 140,
    render: (row) => (
      <Chip
        label={row.status}
        size="small"
        sx={{
          bgcolor: row.status === "Active" ? "#DCFCE7" : "#E5E7EB",
          color: row.status === "Active" ? "#16A34A" : "#6B7280",
          fontWeight: 500,
        }}
      />
    ),
  },
  { key: "role", header: "Role", width: 160 },
  {
    key: "action",
    header: "Actions",
    width: 120,
    render: () => (
      <IconButton size="small">
        <EditOutlinedIcon fontSize="small" />
      </IconButton>
    ),
  },
];

/* ---------------- PAGE ---------------- */
const UserListPage = () => {
  const [search, setSearch] = useState("");

  const { data: users = [], isLoading, isError } = useUsers();

  const filteredUsers = useMemo(() => {
    if (!search) return users;

    return users.filter((u: User) =>
      Object.values(u).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, users]);

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Failed to load users</div>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          p: 2,
          bgcolor: "#FFF",
          borderRadius: 2,
        }}
      >
        <TextField
          size="small"
          placeholder={`Search ${filteredUsers.length} records...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 320 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9CA3AF" }} />
              </InputAdornment>
            ),
          }}
        />

        <IconButton sx={{ border: "1px solid #D1D5DB", borderRadius: 2 }}>
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Box>

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
