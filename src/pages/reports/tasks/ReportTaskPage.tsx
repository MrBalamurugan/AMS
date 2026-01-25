import TaskListPage from "./step/ReportTaskListPage";
import { Box, Typography } from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const ReportTaskPage = () => {
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
          gap: 1.5,
          mb: 3,
        }}
      >
        <AssignmentOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography variant="h5" fontWeight={600}>
          Tasks
        </Typography>
      </Box>

      <TaskListPage />
    </Box>
  );
};

export default ReportTaskPage;
