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
type ServiceRecord = {
  id: string;
  sno: number;
  title: string;
  serviceNumber: string;
  serviceType: string;
  serviceBy: string;
  status: "Completed" | "Pending" | "In Progress";
  serviceDate: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockServiceRecords: ServiceRecord[] = [
  {
    id: "1",
    sno: 1,
    title: "Annual Maintenance",
    serviceNumber: "SRV-00021",
    serviceType: "Maintenance",
    serviceBy: "ABC Services",
    status: "Completed",
    serviceDate: "22/01/2026",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<ServiceRecord>[] = [
  { key: "sno", header: "S.No", width: 80 },
  { key: "title", header: "Title", width: 260 },
  { key: "serviceNumber", header: "Service Number", width: 200 },
  { key: "serviceType", header: "Service Type", width: 180 },
  { key: "serviceBy", header: "Service By", width: 200 },
  {
    key: "status",
    header: "Status",
    width: 160,
    render: (row) => (
      <Chip
        label={row.status}
        size="small"
        sx={{
          backgroundColor:
            row.status === "Completed"
              ? "#DCFCE7"
              : row.status === "In Progress"
                ? "#FEF3C7"
                : "#FEE2E2",
          color:
            row.status === "Completed"
              ? "#15803D"
              : row.status === "In Progress"
                ? "#D97706"
                : "#DC2626",
          fontWeight: 500,
          fontSize: 13,
          height: 26,
          borderRadius: 1.5,
        }}
      />
    ),
  },
  { key: "serviceDate", header: "Service Date", width: 180 },
];

/* ------------------ PAGE ------------------ */
const ServiceRecordListPage = () => {
  const [search, setSearch] = useState("");

  const filteredRecords = useMemo(() => {
    if (!search) return mockServiceRecords;

    return mockServiceRecords.filter((r) =>
      Object.values(r).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredRecords.length} records...`}
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
      <ReusableTable<ServiceRecord>
        columns={columns}
        data={filteredRecords}
        getRowId={(row) => row.id}
        emptyText="No service records found"
      />
    </>
  );
};

export default ServiceRecordListPage;
