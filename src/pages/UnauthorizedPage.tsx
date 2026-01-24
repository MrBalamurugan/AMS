import { Box, Typography } from "@mui/material";

export default function UnauthorizedPage() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4">403</Typography>
      <Typography>You are not allowed to access this page.</Typography>
    </Box>
  );
}
