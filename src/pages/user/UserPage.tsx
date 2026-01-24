import UserListPage from "./step/UserListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const UserPage = () => {
  const handleAddUser = () => {
    console.log("Add User clicked");
  };

  return (
    <Box sx={{ p: 1 }}>
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
          <PeopleOutlineIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Users &amp; Teams
          </Typography>
        </Box>

        {/* Right: Add User Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddUser}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add User
        </Button>
      </Box>

      {/* Content */}
      <UserListPage />
    </Box>
  );
};

export default UserPage;
