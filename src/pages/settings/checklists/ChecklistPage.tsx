import ChecklistListPage from "./step/ChecklistListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";

const ChecklistPage = () => {
  const handleAddChecklist = () => {
    console.log("Add Checklist clicked");
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <ChecklistOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Checklists
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddChecklist}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Checklist
        </Button>
      </Box>

      <ChecklistListPage />
    </Box>
  );
};

export default ChecklistPage;
