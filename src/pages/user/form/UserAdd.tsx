import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Formik, Form } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import CustomTextField from "@/components/form/fields/CustomTextField";
import CustomSelectField from "@/components/form/fields/CustomSelectField";
import { useUserMutations } from "@/features/user/hook/useUserMutations";
import { getUserValidationSchema } from "./validation/userValidation";

type User = {
  id: string;
  userName: string;
  email: string;
  role: string;
  phone: string;
  status: "Active" | "Inactive";
};

const UserAdd = () => {
  const { createUser, creating } = useUserMutations();
  const queryClient = useQueryClient();

  const handleSubmit = (values: User, { resetForm }: any) => {
    const users = queryClient.getQueryData<User[]>(["users"]) || [];

    const payload: User = {
      ...values,
      id: String(users.length + 1),
    };

    createUser(payload);
    resetForm();
  };

  return (
    <Formik<User>
      initialValues={{
        id: "",
        userName: "",
        email: "",
        role: "",
        phone: "",
        status: "Active",
      }}
      validationSchema={getUserValidationSchema()}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box p={2}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CustomTextField
                    name="userName"
                    label="User Name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <CustomTextField
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <CustomTextField
                    name="phone"
                    label="Phone Number"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <CustomSelectField
                    name="role"
                    label="Role"
                    fullWidth
                    options={[
                      { label: "Admin", value: "Admin" },
                      { label: "Manager", value: "Manager" },
                      { label: "Technician", value: "Technician" },
                    ]}
                  />
                </Grid>

                <Grid item xs={6}>
                  <CustomSelectField
                    name="status"
                    label="Status"
                    fullWidth
                    options={[
                      { label: "Active", value: "Active" },
                      { label: "Inactive", value: "Inactive" },
                    ]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" disabled={creating}>
                    {creating ? "Creating..." : "Create User"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} display="flex" justifyContent="center">
              <Box textAlign="center">
                <Avatar
                  sx={{ width: 120, height: 120, bgcolor: "#F1F5F9", mb: 1 }}
                >
                  <CameraAltOutlinedIcon
                    sx={{ fontSize: 36, color: "#94A3B8" }}
                  />
                </Avatar>

                <Typography variant="body2" color="text.secondary">
                  Upload photo
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Formik>
  );
};

export default UserAdd;
