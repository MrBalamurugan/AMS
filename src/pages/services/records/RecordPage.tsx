import RecordListPage from "./step/RecordListPage";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const RecordPage = () => {
  const handleAddRecord = () => {
    console.log("Add Record clicked");
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
          <ReceiptLongOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Records
          </Typography>
        </Box>

        {/* Right */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddRecord}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
          }}
        >
          Add Record
        </Button>
      </Box>

      {/* Content */}
      <RecordListPage />
    </Box>
  );
};

export default RecordPage;
