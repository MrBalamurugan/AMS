import { useState } from "react";
import UserListPage from "./step/UserListPage";
import UserAdd from "./form/UserAdd";
import FormDrawer from "../../components/common/FormDrawer";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const UserPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleSaveUser = () => {
    console.log("Save user");
    setOpenDrawer(false);
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          minHeight: "80vh",
          backgroundColor: "#f5f7fb",
          borderRadius: 3,
        }}
      >
        {/* ---------- HEADER ---------- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <PeopleOutlineIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" fontWeight={600}>
              Users
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDrawer(true)}
            sx={{ textTransform: "none" }}
          >
            Add User
          </Button>
        </Box>

        <UserListPage />
      </Box>

      {/* ---------- FORM DRAWER ---------- */}
      <FormDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Add User"
        icon={<PeopleOutlineIcon color="primary" />}
        submitLabel="Save User"
        onSubmit={handleSaveUser}
      >
        <UserAdd />
      </FormDrawer>
    </>
  );
};

export default UserPage;
