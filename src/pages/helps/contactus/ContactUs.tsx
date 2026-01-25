import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Stack,
  Divider,
  Link,
  IconButton,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import workerImg from "../../../assets/userprofile.png"; // update path if needed
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ContactUs = () => {
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
          <InfoOutlinedIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" fontWeight={600}>
            Contact Us
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          p: 4,
        }}
      >
        <Stack direction="row" spacing={6} alignItems="flex-start">
          {/* Left Illustration */}
          <Box>
            <Box
              component="img"
              src={workerImg}
              alt="Support"
              sx={{ width: 170 }}
            />
          </Box>

          {/* Right Content */}
          <Box flex={1}>
            {/* Textarea */}
            <Typography fontWeight={600} mb={1}>
              How can we help you ? <span style={{ color: "red" }}>*</span>
            </Typography>

            <Box sx={{ position: "relative", mb: 4 }}>
              <TextField
                multiline
                rows={6}
                fullWidth
                placeholder="Describe your issue or question..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />

              {/* Send Icon */}
              <IconButton
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "primary.main",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>

            {/* Contact Cards */}
            <Stack direction="row" spacing={3}>
              {/* Email Card */}
              <Card
                sx={{
                  flex: 1,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <EmailOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography fontWeight={600}>Email</Typography>
                      <Link
                        href="mailto:support@faciliteasy.com"
                        underline="hover"
                      >
                        support@faciliteasy.com
                      </Link>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card
                sx={{
                  flex: 1,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <PhoneOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography fontWeight={600}>Phone Number</Typography>
                      <Typography>+91-83008-10025</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Stack>
        <Divider sx={{ mb: 1 }} />

        {/* Footer */}
        <Typography variant="body2" color="text.secondary" textAlign="center">
          © 2024 Faciliteasy, All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
