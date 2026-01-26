import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ReactNode } from "react";

type FormDrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  onSubmit: () => void;
  submitLabel?: string;
  children: ReactNode;
};

const FormDrawer = ({
  open,
  onClose,
  title,
  icon,
  onSubmit,
  submitLabel = "Save",
  children,
}: FormDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 900,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        },
      }}
    >
      {/* ---------- HEADER ---------- */}
      <Box
        sx={{
          px: 3,
          py: 2,
          backgroundColor: "#F7F8FC",
          borderBottom: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          {icon}
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* ---------- CONTENT ---------- */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>{children}</Box>

      {/* ---------- FOOTER ---------- */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #E5E7EB",
          backgroundColor: "#f3f3f3",
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          {submitLabel}
        </Button>
      </Box>
    </Drawer>
  );
};

export default FormDrawer;
