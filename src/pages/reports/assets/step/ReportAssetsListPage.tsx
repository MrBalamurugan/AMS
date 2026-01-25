import { useMemo, useState } from "react";
import ReusableTable from "../../../../components/common/table/ReusableTable";
import type { Column } from "../../../../components/common/table/types";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";

/* ------------------ TYPES ------------------ */
type Asset = {
  id: string;
  sno: number;
  name: string;
  assetId: string;
  owner: string;
  serialNo: string;
  purchased: string;
  facility: string;
};

/* ------------------ MOCK DATA ------------------ */
const mockAssets: Asset[] = [
  {
    id: "1",
    sno: 1,
    name: "LENOVO THINK PAS",
    assetId: "AST-00157",
    owner: "Kishor R",
    serialNo: "456853",
    purchased: "21/01/2026",
    facility: "Test",
  },
];

/* ------------------ COLUMNS ------------------ */
const columns: Column<Asset>[] = [
  { key: "sno", header: "S.No", width: 80 },
  { key: "name", header: "Name", width: 260 },
  { key: "assetId", header: "Asset Id", width: 180 },
  { key: "owner", header: "Owner", width: 180 },
  { key: "serialNo", header: "Serial No", width: 160 },
  { key: "purchased", header: "Purchased", width: 160 },
  { key: "facility", header: "Facility", width: 160 },
];

/* ------------------ PAGE ------------------ */
const ReportAssetsListPage = () => {
  const [search, setSearch] = useState("");

  const filteredAssets = useMemo(() => {
    if (!search) return mockAssets;

    return mockAssets.filter((a) =>
      Object.values(a).join(" ").toLowerCase().includes(search.toLowerCase()),
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
          placeholder={`Search ${filteredAssets.length} records...`}
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
      <ReusableTable<Asset>
        columns={columns}
        data={filteredAssets}
        getRowId={(row) => row.id}
        emptyText="No assets found"
      />
    </>
  );
};

export default ReportAssetsListPage;
