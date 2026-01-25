import RoleListPage from "./step/RoleListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const RolePage = () => {
  const handleAddRole = () => {
    console.log("Add Role clicked");
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
        {/* Left: Icon + Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <SecurityOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Roles
          </Typography>
        </Box>

        {/* Right: Add Role Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddRole}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Role
        </Button>
      </Box>

      {/* Content */}
      <RoleListPage />
    </Box>
  );
};

export default RolePage;
