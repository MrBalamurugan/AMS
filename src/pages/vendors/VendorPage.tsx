import VendorListPage from "./step/VendorListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const VendorPage = () => {
  const handleAddVendor = () => {
    console.log("Add Vendor clicked");
  };

  return (
    <Box
      sx={{
        p: 2,
        minHeight: "80vh",
        backgroundColor: "#f5f7fb",
        borderRadius: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <StorefrontOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Vendors
          </Typography>
        </Box>

        {/* Right */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddVendor}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Vendor
        </Button>
      </Box>

      {/* Content */}
      <VendorListPage />
    </Box>
  );
};

export default VendorPage;
