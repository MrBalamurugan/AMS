import { Typography, Box } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4">404</Typography>
      <Typography>Page not found</Typography>
    </Box>
  );
}
