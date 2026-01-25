import MeterListPage from "./step/MeterListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SpeedIcon from "@mui/icons-material/Speed";

const MeterPage = () => {
  const handleAddMeter = () => {
    console.log("Add Meter clicked");
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
          <SpeedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Meters
          </Typography>
        </Box>

        {/* Right */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddMeter}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Meter
        </Button>
      </Box>

      {/* Content */}
      <MeterListPage />
    </Box>
  );
};

export default MeterPage;
