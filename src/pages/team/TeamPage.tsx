import TeamListPage from "./step/TeamListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const TeamPage = () => {
  const handleAddTeam = () => {
    console.log("Add Team clicked");
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
          <GroupsOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Teams
          </Typography>
        </Box>

        {/* Right: Add Team Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddTeam}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Team
        </Button>
      </Box>

      {/* Content */}
      <TeamListPage />
    </Box>
  );
};

export default TeamPage;
