import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import visuallyHidden from "@mui/utils/visuallyHidden";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Hero() {
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [verifyToken, setVerifyToken] = React.useState("");
  const [manualClose, setManualClose] = React.useState(false);
  const [showCaptchaWarning, setShowCaptchaWarning] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<{
    type: "success" | "error" | "warning";
    text: string;
  } | null>(null);
  const captchaRef = React.useRef(null);
  const onVerify = (token: string) => {
    setVerifyToken(token);
  };
  const handleShowCaptchaWarning = (e: React.FormEvent) => {
    e.preventDefault();
    setManualClose(false);
    setShowCaptchaWarning(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage({
        type: "warning",
        text: "Please enter a valid email address",
      });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://api.squ1ggly.com/api/customerRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-capcha-token": verifyToken,
          },
          body: JSON.stringify({ email, description }),
        },
      );

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thanks! I'll be in touch soon.",
        });
        setEmail("");
        setVerifyToken("");
      } else {
        setMessage({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Unable to send request. Please try again later.",
      });
    } finally {
      setManualClose(false);
      setShowCaptchaWarning(false);
      setLoading(false);
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 20,
          pb: 8,
        }}
      >
        <Stack
          spacing={3}
          useFlexGap
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            maxWidth: 800,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Sam's&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: "primary.main",
              }}
            >
              IT Solutions
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 600,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Azure & IT Administration
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 700,
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Helping businesses manage Azure Entra ID and handle day-to-day IT
            administration tasks.
          </Typography>

          {/* Service highlights */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{
              mt: 2,
              mb: 1,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CloudIcon sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">
                Azure Administration
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SecurityIcon sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">
                User Management
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SupportAgentIcon sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">
                IT Support
              </Typography>
            </Box>
          </Stack>

          {/* CTA Form */}
          <Box
            component="form"
            onSubmit={
              verifyToken != "" ? handleSubmit : handleShowCaptchaWarning
            }
            sx={{
              width: "100%",
              maxWidth: 475,
              mt: 2,
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={1.5}
              useFlexGap
            >
              <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-hero"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="your.email@company.com"
                fullWidth
                disabled={loading}
                slotProps={{
                  htmlInput: {
                    autoComplete: "email",
                    "aria-label": "Enter your email address",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.paper",
                  },
                }}
              />
              <TextField
                id="outlined-multiline"
                multiline
                fullWidth
                placeholder="Description"
                size="small"
                rows={5}
                maxRows={5}
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
                sx={{
                  minWidth: "fit-content",
                  width: "60%",
                  px: 3,
                  fontWeight: 600,
                  "&.Mui-disabled": {
                    color: "grey",
                    cursor: "not-allowed",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Contact Me!"
                )}
              </Button>
            </Stack>

            {message && (
              <Alert
                severity={message.type}
                sx={{
                  mt: 2,
                }}
                onClose={() => setMessage(null)}
              >
                {message.text}
              </Alert>
            )}

            {!verifyToken && showCaptchaWarning && !manualClose && (
              <Alert
                severity="warning"
                sx={{ mt: 2 }}
                onClose={() => setManualClose(true)}
              >
                Complete the Capture to Submit!
              </Alert>
            )}
          </Box>
          <Box display={!(email || showCaptchaWarning) ? "none" : "inherit"}>
            <HCaptcha
              sitekey="cfc2a48a-879c-4edc-a7c4-93580dd239a6"
              onVerify={onVerify}
              ref={captchaRef}
            />
          </Box>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            First consultation Free • Responses within 24 hours
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
