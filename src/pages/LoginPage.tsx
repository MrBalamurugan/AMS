import {
  Button,
  Stack,
  TextField,
  Typography,
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  useTheme,
  alpha,
  Grid,
} from "@mui/material";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff, Mail, Phone } from "@mui/icons-material";

import Facilitlogo from "../assets/faciliteasylogo.png";
import loginimage from "../assets/loginimage.png";

export default function LoginPage() {
  const login = useLogin();
  const navigate = useNavigate();
  const theme = useTheme();
  const [authTab, setAuthTab] = useState<"email" | "phone">("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (login.isSuccess) {
      navigate("/", { replace: true });
    }
  }, [login.isSuccess, navigate]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box sx={{ height: "100vh", display: "flex", overflow: "hidden" }}>
      <Grid container sx={{ height: "100vh" }}>
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={loginimage}
            alt="Login visual"
            sx={{
              width: "90%",
              height: "90%",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 520,
              backgroundColor: "#f2f2f2",
              borderRadius: 4,
              p: { xs: 3, sm: 4 },
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Box
                component="img"
                src={Facilitlogo}
                alt="FacilitEasy Logo"
                sx={{
                  width: 220,
                  height: "auto",
                  objectFit: "contain",
                  ml: -2.5,
                }}
              />
            </Box>

            {/* Title */}
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="left"
              color="#646464"
              mb={0.5}
            >
              Login to your account
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="left"
              mb={3}
            >
              We Are Happy To See You Again
            </Typography>

            {/* Tabs */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e8e8e8",
                borderRadius: 999,
                p: 0.5,
                mb: 3,
              }}
            >
              {/* Email tab */}
              <Button
                fullWidth
                onClick={() => setAuthTab("email")}
                sx={{
                  py: 1.25,
                  borderRadius: 999,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  transition: "all 1s ease",
                  backgroundColor:
                    authTab === "email" ? "#4A90E2" : "transparent",
                  color: authTab === "email" ? "#fff" : "#666",
                  boxShadow:
                    authTab === "email" ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  "&:hover": {
                    backgroundColor:
                      authTab === "email" ? "#3A7BC8" : "transparent",
                  },
                }}
              >
                Email
              </Button>

              {/* Phone tab */}
              <Button
                fullWidth
                onClick={() => setAuthTab("phone")}
                sx={{
                  py: 1.25,
                  borderRadius: 999,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  backgroundColor:
                    authTab === "phone" ? "#4A90E2" : "transparent",
                  color: authTab === "phone" ? "#fff" : "#666",
                  boxShadow:
                    authTab === "phone" ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  "&:hover": {
                    backgroundColor:
                      authTab === "phone" ? "#3A7BC8" : "transparent",
                  },
                }}
              >
                Phone
              </Button>
            </Box>

            {login.isError && (
              <Alert
                severity="error"
                sx={{
                  mb: 2.5,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.error.light}`,
                }}
              >
                {(login.error as Error).message}
              </Alert>
            )}

            {/* Form */}
            <Stack spacing={2.25}>
              {authTab === "email" ? (
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 25,
                      backgroundColor: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4A90E2",
                        borderWidth: 2,
                      },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Mail sx={{ color: "#bbb" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              ) : (
                <TextField
                  fullWidth
                  placeholder="Enter your phone number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 25,
                      backgroundColor: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4A90E2",
                        borderWidth: 2,
                      },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone sx={{ color: "#bbb" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              <TextField
                fullWidth
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: 25,
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e0e0e0",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A90E2",
                      borderWidth: 2,
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      size="small"
                      sx={{
                        color: "#4A90E2",
                        "&.Mui-checked": { color: "#4A90E2" },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" color="text.secondary">
                      Keep me signed in{" "}
                    </Typography>
                  }
                />

                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    fontSize: "0.875rem",
                    color: "#4A90E2",
                    fontWeight: 500,
                    minWidth: "auto",
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  Forgot Password?
                </Button>
              </Stack>

              <Button
                fullWidth
                variant="contained"
                size="large"
                disabled={login.isPending}
                onClick={() => login.mutate({ email, password })}
                sx={{
                  py: 1.75,
                  borderRadius: 25,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  backgroundColor: "#4A90E2",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#3A7BC8",
                    boxShadow: "0 4px 12px rgba(74, 144, 226, 0.3)",
                  },
                  "&:disabled": {
                    backgroundColor: alpha("#4A90E2", 0.5),
                  },
                }}
              >
                {login.isPending ? "Signing in..." : "Login"}
              </Button>

              <Divider sx={{ my: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ px: 2, fontSize: "0.75rem" }}
                >
                  OR
                </Typography>
              </Divider>

              <Stack spacing={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </Box>
                  }
                  sx={{
                    py: 1.75,
                    borderRadius: 25,
                    textTransform: "none",
                    borderColor: "#e0e0e0",
                    color: "#666",
                    fontWeight: 500,
                    "&:hover": {
                      borderColor: "#e0e0e0",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Log in with{" "}
                  <Box component="span" sx={{ color: "#757575", ml: 0.5 }}>
                    Google
                  </Box>
                </Button>
              </Stack>
              {/* Sign up link */}
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ mt: 1.5, color: "text.secondary" }}
              >
                Don&apos;t have an account?{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#4A90E2",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
