import { Box, Grid, Typography, Avatar } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Formik, Form } from "formik";

import CustomTextField from "@/components/form/fields/CustomTextField";
import CustomSelectField from "@/components/form/fields/CustomSelectField";

const VendorAdd = () => {
  return (
    <Formik
      initialValues={{
        vendorName: "",
        businessDescription: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        category: "",
        phoneNumber: "",
        mobileNumber: "",
        email: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Box p={2}>
          <Grid container spacing={3}>
            {/* LEFT FORM SECTION */}
            <Grid item xs={9}>
              <Grid container spacing={2}>
                {/* Row 1 */}
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="vendorName"
                    label="Vendor Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="businessDescription"
                    label="Business Description"
                  />
                </Grid>

                {/* Row 2 */}
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="address1"
                    label="Address Line 1"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="address2"
                    label="Address Line 2"
                  />
                </Grid>

                {/* Row 3 */}
                <Grid item xs={4}>
                  <CustomTextField fullWidth name="city" label="City" />
                </Grid>
                <Grid item xs={4}>
                  <CustomTextField fullWidth name="state" label="State" />
                </Grid>
                <Grid item xs={4}>
                  <CustomTextField fullWidth name="zip" label="ZIP Code" />
                </Grid>

                {/* Row 4 */}
                <Grid item xs={6}>
                  <CustomTextField fullWidth name="country" label="Country" />
                </Grid>
                <Grid item xs={6}>
                  <CustomSelectField
                    fullWidth
                    name="category"
                    label="Category"
                    options={[
                      { label: "Retail", value: "retail" },
                      { label: "Wholesale", value: "wholesale" },
                    ]}
                  />
                </Grid>

                {/* Row 5 */}
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    name="mobileNumber"
                    label="Mobile Number"
                  />
                </Grid>

                {/* Row 6 */}
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    name="email"
                    label="Email Address"
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* RIGHT IMAGE SECTION */}
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box textAlign="center">
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: "#F1F5F9",
                    mb: 1,
                  }}
                >
                  <CameraAltOutlinedIcon
                    sx={{ fontSize: 36, color: "#94A3B8" }}
                  />
                </Avatar>
                <Typography variant="body2" color="text.secondary">
                  Add or take photos
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Formik>
  );
};

export default VendorAdd;
