import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Stack,
  IconButton,
  alpha,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Close as CloseIcon,
  Check as CheckIcon,
  CalendarMonth as CalendarIcon,
  AttachMoney as MoneyIcon,
  Stars as StarsIcon,
} from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import workerImg from "@/assets/userprofile.png";

// Mock Data (same as before)
const userData = {
  name: "Kishor R",
  email: "kishor123@gmail.com",
  location: "Kasadara",
};

const facilities = ["testfacility", "Agt", "test", "HR Unit", "test stage"];

const tasks = [
  { completed: 0, total: 0, label: "Past Due", color: "#6366f1" },
  { completed: 6, total: 7, label: "High Priority", color: "#14b8a6" },
];

const issues = [
  { count: 1, total: 1, label: "High", color: "#14b8a6" },
  { count: 4, total: 4, label: "Medium", color: "#ef4444" },
];

const assetAgingData = [
  { category: "Vehicle", age: 3.6 },
  { category: "Lighting Systems", age: 0.0 },
  { category: "Network Components", age: 0.0 },
  { category: "Computer & Accessories", age: 0.5 },
];

const assetValueData = [
  { category: "MechanicalAsset", value: 0 },
  { category: "Air Conditioners", value: 6272626 },
  { category: "Vehicle", value: 48000 },
  { category: "Lighting Systems", value: 0 },
];

const assetStats = [
  { completed: 13, total: 156, label: "Active", color: "#6366f1" },
  { completed: 9, total: 9, label: "Purchased this year", color: "#14b8a6" },
  { completed: 0, total: 0, label: "Inactive", color: "#ef4444" },
];

const assetCategoryData = [
  { name: "MechanicalAsset", value: 70, color: "#6366f1" },
  { name: "Computer & Accessories", value: 10, color: "#ef4444" },
  { name: "Network Components", value: 5, color: "#f59e0b" },
  { name: "Vehicle", value: 8, color: "#fbbf24" },
  { name: "Air Conditioners", value: 5, color: "#14b8a6" },
  { name: "Others", value: 2, color: "#8b5cf6" },
];

const approvals = [
  { id: "TSK-00008", name: "Charger wire fix" },
  { id: "SVC-00002", name: "IntelliswiftRecords" },
  { id: "SVC-00001", name: "Itron" },
  { id: "SVC-00003", name: "laptopService" },
];

const serviceContracts = [
  { count: 3, label: "Active", color: "#6366f1" },
  { count: 2, label: "Expiring Soon", color: "#14b8a6" },
  { count: 0, label: "Expired", color: "#ef4444" },
];

export default function AssetDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        borderRadius: 3,
        bgcolor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight={700}
        mb={3}
        color="#1f2937"
      >
        Dashboard
      </Typography>

      {/* Top Row - User Info and Stats */}
      <Grid container spacing={2} mb={3}>
        {/* User Profile Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 }, textAlign: "center" }}>
              {/* Image */}
              <Box
                sx={{
                  width: 160,
                  height: 160,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={workerImg}
                  alt="Worker"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Divider */}
              <Divider sx={{ mb: 2 }} />

              {/* Text */}
              <Typography
                variant="h6"
                fontWeight={600}
                color="#1f2937"
                gutterBottom
              >
                Welcome {userData.name}
              </Typography>

              <Typography variant="body2" color="#6b7280" gutterBottom>
                {userData.email}
              </Typography>

              <Typography variant="body2" color="#6366f1" fontWeight={500}>
                {userData.location}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* My Facilities */}
        <Grid item xs={12} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h6" fontWeight={600} mb={2} color="#1f2937">
                My Facilities
              </Typography>
              <Stack spacing={1}>
                {facilities.slice(0, 4).map((facility, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: { xs: 1, sm: 1.5 },
                      bgcolor: "#f3f4f6",
                      borderRadius: 1,
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#4b5563",
                    }}
                  >
                    {facility}
                  </Box>
                ))}
                <Button
                  size="small"
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    color: "#6366f1",
                    fontWeight: 600,
                  }}
                >
                  View More
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* My Tasks */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <CheckCircleIcon
                  sx={{ color: "#1f2937", fontSize: { xs: 20, sm: 24 } }}
                />
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  fontWeight={600}
                  color="#1f2937"
                >
                  My Tasks/All Tasks
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {tasks.map((task, idx) => (
                  <Stack
                    key={idx}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: { xs: 48, sm: 64 },
                        bgcolor: task.color,
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant={isMobile ? "h5" : "h4"}
                        fontWeight={700}
                        sx={{ color: task.color }}
                      >
                        {task.completed} /{task.total}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#6b7280"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {task.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* My Issues */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <WarningIcon
                  sx={{ color: "#1f2937", fontSize: { xs: 20, sm: 24 } }}
                />
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  fontWeight={600}
                  color="#1f2937"
                >
                  My Issues/All Issues
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {issues.map((issue, idx) => (
                  <Stack
                    key={idx}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: { xs: 48, sm: 64 },
                        bgcolor: issue.color,
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant={isMobile ? "h5" : "h4"}
                        fontWeight={700}
                        sx={{ color: issue.color }}
                      >
                        {issue.count} /{issue.total}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#6b7280"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {issue.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Middle Row - Asset Aging and Value */}
      <Grid container spacing={2} mb={3}>
        {/* Asset Aging Summary */}
        <Grid item xs={12} lg={6}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                fontWeight={600}
                mb={3}
                color="#1f2937"
              >
                Asset Aging Summary (years)
              </Typography>
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={3}
                alignItems={isMobile ? "center" : "flex-start"}
              >
                <Stack
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                  sx={{ minWidth: { xs: "auto", sm: 180 } }}
                  mb={isMobile ? 2 : 0}
                >
                  <CalendarIcon
                    sx={{
                      fontSize: { xs: 48, sm: 85 },
                      color: "#6366f1",
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="#6b7280"
                    fontWeight={500}
                    textAlign="center"
                    fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                  >
                    Overall average age
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h5"}
                    fontWeight={700}
                    color="#1f2937"
                  >
                    21497.6
                  </Typography>
                </Stack>
                <Stack spacing={1.5} flex={1} sx={{ width: "100%" }}>
                  {assetAgingData.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: { xs: 1, sm: 1.5 },
                        bgcolor: "#f3f4f6",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        color="#4b5563"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {item.category}
                      </Typography>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        fontWeight={600}
                        color="#1f2937"
                      >
                        {item.age}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Asset Value Summary */}
        <Grid item xs={12} lg={6}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                fontWeight={600}
                mb={3}
                color="#1f2937"
              >
                Asset Value Summary
              </Typography>
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={3}
                alignItems={isMobile ? "center" : "flex-start"}
              >
                <Stack
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={1}
                  sx={{ minWidth: { xs: "auto", sm: 180 } }}
                  mb={isMobile ? 2 : 0}
                >
                  <Box
                    sx={{
                      width: { xs: 60, sm: 80 },
                      height: { xs: 60, sm: 80 },
                      borderRadius: "50%",
                      border: "4px solid #6366f1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <MoneyIcon
                      sx={{
                        fontSize: { xs: 30, sm: 40 },
                        color: "#6366f1",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="#6b7280"
                    fontWeight={500}
                    textAlign="center"
                    fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                  >
                    Overall Value
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h5"}
                    fontWeight={700}
                    color="#1f2937"
                  >
                    6,720,626
                  </Typography>
                </Stack>
                <Stack spacing={1.5} flex={1} sx={{ width: "100%" }}>
                  {assetValueData.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: { xs: 1, sm: 1.5 },
                        bgcolor: "#f3f4f6",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="#4b5563"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {item.category}
                      </Typography>
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        fontWeight={600}
                        color="#1f2937"
                      >
                        {item.value.toLocaleString()}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Row - Assets, Categories, Approvals, Contracts */}
      <Grid container spacing={2}>
        {/* My Assets */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <PhoneAndroidIcon
                  sx={{
                    color: "#1f2937",
                    fontSize: { xs: 20, sm: 24 },
                  }}
                />
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  fontWeight={600}
                  color="#1f2937"
                >
                  My Assets/All Assets
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {assetStats.map((stat, idx) => (
                  <Stack
                    key={idx}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: { xs: 48, sm: 64 },
                        bgcolor: stat.color,
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant={isMobile ? "h5" : "h4"}
                        fontWeight={700}
                        sx={{ color: stat.color }}
                      >
                        {stat.completed} /{stat.total}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#6b7280"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Asset Categories */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                fontWeight={600}
                mb={2}
                color="#1f2937"
              >
                Asset Categories
              </Typography>
              <Box
                sx={{
                  height: { xs: 150, sm: 180 },
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assetCategoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={isMobile ? 35 : 45}
                      outerRadius={isMobile ? 60 : 75}
                    >
                      {assetCategoryData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Grid container spacing={0.5}>
                {assetCategoryData.map((cat, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: cat.color,
                          borderRadius: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="#6b7280"
                        fontSize={{ xs: "0.6rem", sm: "0.7rem" }}
                        sx={{ lineHeight: 1.2 }}
                      >
                        {cat.name}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Approvals */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <CheckCircleIcon
                  sx={{
                    color: "#1f2937",
                    fontSize: { xs: 20, sm: 24 },
                  }}
                />
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  fontWeight={600}
                  color="#1f2937"
                  sx={{ flex: 1 }}
                >
                  Approvals
                </Typography>
                <Chip
                  label="4"
                  size="small"
                  sx={{
                    bgcolor: "#6366f1",
                    color: "white",
                    fontWeight: 600,
                    height: 20,
                    minWidth: 28,
                    fontSize: "0.75rem",
                  }}
                />
              </Stack>
              <Stack spacing={1.5}>
                {approvals.map((approval, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="#1f2937"
                        noWrap
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {approval.id}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="#6b7280"
                        noWrap
                        fontSize={{ xs: "0.7rem", sm: "0.75rem" }}
                      >
                        {approval.name}
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={0.5} flexShrink={0}>
                      <IconButton
                        size="small"
                        sx={{
                          border: "2px solid #ef4444",
                          color: "#ef4444",
                          width: { xs: 24, sm: 28 },
                          height: { xs: 24, sm: 28 },
                          "&:hover": {
                            bgcolor: alpha("#ef4444", 0.1),
                          },
                        }}
                      >
                        <CloseIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          border: "2px solid #10b981",
                          color: "#10b981",
                          width: { xs: 24, sm: 28 },
                          height: { xs: 24, sm: 28 },
                          "&:hover": {
                            bgcolor: alpha("#10b981", 0.1),
                          },
                        }}
                      >
                        <CheckIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
                      </IconButton>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Service Contracts */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <StarsIcon
                  sx={{
                    color: "#1f2937",
                    fontSize: { xs: 20, sm: 24 },
                  }}
                />
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  fontWeight={600}
                  color="#1f2937"
                >
                  Service Contracts
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {serviceContracts.map((contract, idx) => (
                  <Stack
                    key={idx}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: { xs: 48, sm: 64 },
                        bgcolor: contract.color,
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant={isMobile ? "h5" : "h4"}
                        fontWeight={700}
                        sx={{ color: contract.color }}
                      >
                        {contract.count}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#6b7280"
                        fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
                      >
                        {contract.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
