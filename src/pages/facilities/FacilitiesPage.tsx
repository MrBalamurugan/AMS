import FacilitiesListPage from "./step/FacilitiesListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

const FacilitiesPage = () => {
  const handleAddFacility = () => {
    console.log("Add Facility clicked");
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
          <ApartmentOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Facilities
          </Typography>
        </Box>

        {/* Right */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddFacility}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Facility
        </Button>
      </Box>

      {/* Content */}
      <FacilitiesListPage />
    </Box>
  );
};

export default FacilitiesPage;
