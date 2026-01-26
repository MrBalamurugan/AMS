import { useState } from "react";
import VendorListPage from "./step/VendorListPage";
import VendorAdd from "./form/VendorAdd";
import FormDrawer from "../../components/common/FormDrawer";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const VendorPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleSaveVendor = () => {
    // handle submit logic
    console.log("Save vendor");
    setOpenDrawer(false);
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          minHeight: "80vh",
          backgroundColor: "#f5f7fb",
          borderRadius: 3,
        }}
      >
        {/* ---------- HEADER ---------- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <StorefrontOutlinedIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" fontWeight={600}>
              Vendors
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDrawer(true)}
            sx={{ textTransform: "none" }}
          >
            Add Vendor
          </Button>
        </Box>

        <VendorListPage />
      </Box>

      {/* ---------- REUSABLE FORM DRAWER ---------- */}
      <FormDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Add Vendor"
        icon={<StorefrontOutlinedIcon color="primary" />}
        submitLabel="Save Vendor"
        onSubmit={handleSaveVendor}
      >
        <VendorAdd />
      </FormDrawer>
    </>
  );
};

export default VendorPage;
