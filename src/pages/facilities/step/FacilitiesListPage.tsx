import { useMemo, useState } from "react";
import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

/* ------------------ TYPES ------------------ */
type Facility = {
  id: string;
  sno: number;
  name: string;
  type: string;
  location: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockFacilities: Facility[] = [
  {
    id: "1",
    sno: 1,
    name: "testfacility",
    type: "Institutional",
    location:
      "Sitra (Infront of Passport Office), TNHB Colony, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014, India",
  },
  {
    id: "2",
    sno: 2,
    name: "Agt",
    type: "Business",
    location:
      "2nd floor, AGT Business Park, 25, Electronics Estate, Avinashi Road, TNHB Colony, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014, India",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Facility>[] = [
  { key: "sno", header: "S.No", width: 80 },
  {
    key: "name",
    header: "Name",
    width: 220,
    render: (row) => (
      <Link
        component="button"
        underline="none"
        sx={{
          color: "#0EA5E9",
          fontWeight: 500,
        }}
        onClick={() => console.log("View facility:", row.name)}
      >
        {row.name}
      </Link>
    ),
  },
  { key: "type", header: "Type", width: 180 },
  { key: "location", header: "Location", width: 520 },
  {
    key: "action",
    header: "Actions",
    width: 120,
    render: () => (
      <IconButton
        size="small"
        sx={{ color: "#334155" }}
        onClick={() => console.log("Edit facility")}
      >
        <EditOutlinedIcon fontSize="small" />
      </IconButton>
    ),
  },
];

/* ------------------ PAGE ------------------ */
const FacilitiesListPage = () => {
  const [search, setSearch] = useState("");

  const filteredFacilities = useMemo(() => {
    if (!search) return mockFacilities;

    return mockFacilities.filter((f) =>
      Object.values(f).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredFacilities.length} records...`}
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
      <ReusableTable<Facility>
        columns={columns}
        data={filteredFacilities}
        getRowId={(row) => row.id}
        emptyText="No facilities found"
      />
    </>
  );
};

export default FacilitiesListPage;
