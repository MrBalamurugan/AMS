import { useState, useMemo } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Button,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

/* ------------------ TYPES ------------------ */
type Role = {
  id: string;
  name: string;
  description: string;
  type: "System" | "Custom";
};

/* ------------------ MOCK DATA ------------------ */
const mockRoles: Role[] = [
  {
    id: "1",
    name: "Admin",
    description: "Full access to all modules",
    type: "System",
  },
  {
    id: "2",
    name: "Editor",
    description: "Can edit content",
    type: "Custom",
  },
  {
    id: "3",
    name: "Viewer",
    description: "Read-only access",
    type: "System",
  },
  {
    id: "4",
    name: "User",
    description: "Read-only access",
    type: "Custom",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Role>[] = [
  { key: "name", header: "Name", width: 200 },
  { key: "description", header: "Description", width: 320 },
  {
    key: "type",
    header: "Type",
    width: 140,
    render: (row) => (
      <Chip
        label={row.type}
        size="small"
        sx={{
          backgroundColor: row.type === "System" ? "#E0E7FF" : "#ECFDF5",
          color: row.type === "System" ? "#4338CA" : "#047857",
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
    header: "Action",
    width: 140,
    render: () => (
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

const RoleListPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  /* ------------------ FILTER / SORT ------------------ */
  const filteredRoles = useMemo(() => {
    let roles = [...mockRoles];

    // Search
    if (search) {
      roles = roles.filter((r) =>
        Object.values(r).join(" ").toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort
    if (sortBy !== "default") {
      roles.sort((a: any, b: any) =>
        a[sortBy].toString().localeCompare(b[sortBy].toString()),
      );
    }

    return roles;
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
          placeholder={`Search ${filteredRoles.length} records...`}
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
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="type">Type</MenuItem>
          </TextField>

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
      </Box>

      {/* ------------------ TABLE ------------------ */}
      <ReusableTable<Role>
        columns={columns}
        data={filteredRoles}
        getRowId={(row) => row.id}
        emptyText="No roles found"
      />
    </>
  );
};

export default RoleListPage;
