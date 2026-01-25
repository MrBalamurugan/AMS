import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Link,
  Divider,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmailIcon from "@mui/icons-material/Email";
import workerImg from "../../../assets/userprofile.png";

const AboutUs = () => {
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
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Content Card */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          p: 4,
        }}
      >
        <Stack direction="row" spacing={5} alignItems="flex-start">
          {/* Left Image */}
          <Box>
            <Box
              component="img"
              src={workerImg}
              alt="Worker"
              sx={{ width: 170 }}
            />
          </Box>

          {/* Right Content */}
          <Box maxWidth={760}>
            {/* Logo & Version */}
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Typography variant="subtitle1" fontWeight={700} color="primary">
                🛠 FACILITEASY
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                V1.0.0
              </Typography>
            </Stack>

            <Typography paragraph>
              We provide you the software to manage your assets so you don’t
              miss your maintenance objectives. We do this by helping you keep
              track of the entire history of your asset to maximize the
              lifecycle value.
            </Typography>

            <Typography paragraph>
              FacilitEasy is ideal for technicians to organize their tasks and
              maintenance schedules, while enabling management to have full
              visibility of the maintenance program.
            </Typography>

            <Typography paragraph>
              Our philosophy is to simplify asset management and let every asset
              live a long and healthy service life.
            </Typography>

            {/* Email Card */}
            <Card
              sx={{
                mt: 3,
                width: "fit-content",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" fontSize="large" />
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

export default AboutUs;
