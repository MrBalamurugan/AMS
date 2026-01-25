import { useMemo, useState } from "react";
import ReusableTable from "../../../../components/common/table/ReusableTable";
import type { Column } from "../../../../components/common/table/types";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

/* ------------------ TYPES ------------------ */
type Checklist = {
  id: string;
  name: string;
  createdBy: string;
  lastUpdate: string;
  category: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockChecklists: Checklist[] = [
  {
    id: "1",
    name: "Portable Ladder Inspection (Monthly)",
    createdBy: "",
    lastUpdate: "23/11/2025",
    category: "",
  },
  {
    id: "2",
    name: "General Fire Inspection/Audit",
    createdBy: "",
    lastUpdate: "23/11/2025",
    category: "",
  },
  {
    id: "3",
    name: "Machine Safety Checklist",
    createdBy: "",
    lastUpdate: "23/11/2025",
    category: "",
  },
  {
    id: "4",
    name: "Generator Visual Inspection (Monthly)",
    createdBy: "",
    lastUpdate: "23/11/2025",
    category: "",
  },
  {
    id: "5",
    name: "General Extinguisher Inspection (Monthly)",
    createdBy: "",
    lastUpdate: "23/11/2025",
    category: "",
  },
];

/* ------------------ COLUMNS ------------------ */
const checklistColumns: Column<Checklist>[] = [
  {
    key: "name",
    header: "CheckList Name",
    width: 420,
    render: (row) => (
      <Link
        component="button"
        underline="none"
        sx={{ color: "#0EA5E9", fontWeight: 500 }}
        onClick={() => console.log("View checklist:", row.name)}
      >
        {row.name}
      </Link>
    ),
  },
  { key: "createdBy", header: "Created By", width: 200 },
  { key: "lastUpdate", header: "Last Update", width: 180 },
  { key: "category", header: "Category", width: 200 },
];

/* ------------------ PAGE ------------------ */
const ChecklistListPage = () => {
  const [search, setSearch] = useState("");

  const filteredChecklists = useMemo(() => {
    if (!search) return mockChecklists;
    return mockChecklists.filter((c) =>
      Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredChecklists.length} records...`}
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

      <ReusableTable<Checklist>
        columns={checklistColumns}
        data={filteredChecklists}
        getRowId={(row) => row.id}
        emptyText="No checklists found"
      />
    </>
  );
};

export default ChecklistListPage;
