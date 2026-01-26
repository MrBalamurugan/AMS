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
type Vendor = {
  id: string;
  name: string;
  category: string;
  address: string;
  phoneNumber: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "Air Aviations",
    category: "Aviation Services",
    address:
      "Civil Aerodome, Coimbatore, Civil Aerodome, Coimbatore-643212, Tamil Nadu, India",
    phoneNumber: "+91 93453-66634",
  },
  {
    id: "2",
    name: "Intelliswift",
    category: "IT Services",
    address:
      "Civil Aerodome, Coimbatore, Civil Aerodome, Coimbatore-643212, Tamil Nadu, India",
    phoneNumber: "+91 93453-66634",
  },
  {
    id: "3",
    name: "Air Aviations",
    category: "Aviation Services",
    address:
      "Civil Aerodome, Coimbatore, Civil Aerodome, Coimbatore-643212, Tamil Nadu, India",
    phoneNumber: "+91 93453-66634",
  },
  {
    id: "3",
    name: "Intelliswift",
    category: "IT Services",
    address:
      "Civil Aerodome, Coimbatore, Civil Aerodome, Coimbatore-643212, Tamil Nadu, India",
    phoneNumber: "+91 93453-66634",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Vendor>[] = [
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
          cursor: "pointer",
        }}
        onClick={() => console.log("View vendor:", row.name)}
      >
        {row.name}
      </Link>
    ),
  },
  { key: "category", header: "Category", width: 200 },
  { key: "address", header: "Address", width: 460 },
  { key: "phoneNumber", header: "Phone Number", width: 200 },
  {
    key: "action",
    header: "Actions",
    width: 120,
    render: () => (
      <IconButton
        size="small"
        sx={{
          color: "#334155",
        }}
        onClick={() => console.log("Edit vendor")}
      >
        <EditOutlinedIcon fontSize="small" />
      </IconButton>
    ),
  },
];

/* ------------------ PAGE ------------------ */
const VendorListPage = () => {
  const [search, setSearch] = useState("");

  const filteredVendors = useMemo(() => {
    if (!search) return mockVendors;

    return mockVendors.filter((v) =>
      Object.values(v).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredVendors.length} records...`}
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
      <ReusableTable<Vendor>
        columns={columns}
        data={filteredVendors}
        getRowId={(row) => row.id}
        emptyText="No vendors found"
      />
    </>
  );
};

export default VendorListPage;
