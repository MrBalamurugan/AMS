import ServiceContractListPage from "./step/ServiceContractListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const ServiceContractPage = () => {
  const handleAddContract = () => {
    console.log("Add Service Contract clicked");
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
          <DescriptionOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Service Contracts
          </Typography>
        </Box>

        {/* Right */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddContract}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Service Contract
        </Button>
      </Box>

      {/* Content */}
      <ServiceContractListPage />
    </Box>
  );
};

export default ServiceContractPage;
