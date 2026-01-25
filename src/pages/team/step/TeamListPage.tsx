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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

/* ------------------ TYPES ------------------ */
type Team = {
  id: string;
  name: string;
  description: string;
  members: number;
};

/* ------------------ MOCK DATA ------------------ */
const mockTeams: Team[] = [
  {
    id: "1",
    name: "Engineering",
    description: "Handles product development",
    members: 12,
  },
  {
    id: "2",
    name: "Marketing",
    description: "Marketing & brand management",
    members: 8,
  },
  {
    id: "3",
    name: "Sales",
    description: "Sales & customer relations",
    members: 10,
  },
  {
    id: "4",
    name: "HR",
    description: "Human resources & operations",
    members: 5,
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Team>[] = [
  { key: "name", header: "Name", width: 200 },
  { key: "description", header: "Description", width: 320 },
  { key: "members", header: "Members", width: 120 },
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

const TeamListPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  /* ------------------ FILTER / SORT ------------------ */
  const filteredTeams = useMemo(() => {
    let teams = [...mockTeams];

    // Search
    if (search) {
      teams = teams.filter((t) =>
        Object.values(t).join(" ").toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sort
    if (sortBy !== "default") {
      teams.sort((a: any, b: any) =>
        a[sortBy].toString().localeCompare(b[sortBy].toString()),
      );
    }

    return teams;
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
          placeholder={`Search ${filteredTeams.length} records...`}
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
            <MenuItem value="members">Members</MenuItem>
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
      <ReusableTable<Team>
        columns={columns}
        data={filteredTeams}
        getRowId={(row) => row.id}
        emptyText="No teams found"
      />
    </>
  );
};

export default TeamListPage;
