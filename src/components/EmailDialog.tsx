import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface EmailDialogProps {
  open: boolean;
  onClose: () => void;
  planTitle: string;
}

export default function EmailDialog({
  open,
  onClose,
  planTitle,
}: EmailDialogProps) {
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [verifyToken, setVerifyToken] = React.useState("");
  const [manualClose, setManualClose] = React.useState(false);
  const [showCaptchaWarning, setShowCaptchaWarning] = React.useState(false);
  const [afterSubmit, setAfterSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const captchaRef = React.useRef(null);
  const onVerify = (token: string) => {
    setVerifyToken(token);
  };
  const handleShowCaptchaWarning = (e: React.FormEvent) => {
    e.preventDefault();
    setManualClose(false);
    setShowCaptchaWarning(true);
  };
  const [message, setMessage] = React.useState<{
    type: "success" | "error" | "warning";
    text: string;
  } | null>(null);

  const handleClose = async () => {
    onClose();
    await new Promise((r) => setTimeout(r, 200)); // Stops the ui from glitching out when closing the form
    setEmail("");
    setMessage(null);
    setAfterSubmit(false);
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
            "x-captcha-token": verifyToken,
          },
          body: JSON.stringify({
            email,
            plan: planTitle,
            description,
          }),
        },
      );

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thanks! I'll reach out within 24 hours to discuss your needs.",
        });
        setEmail("");
        setDescription("");
        setVerifyToken("");
        setAfterSubmit(true);
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
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      sx={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Box
        component="form"
        onSubmit={verifyToken != "" ? handleSubmit : handleShowCaptchaWarning}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <DialogTitle sx={{ width: "100%" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {planTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter your email to get started
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "100%" }}>
          <TextField
            id="email-dialog-input"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hiddenLabel
            size="medium"
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
              marginTop: "5px",
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
            size="medium"
            rows={5}
            maxRows={5}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              marginTop: "10px",
            }}
          />

          {message && (
            <Alert
              severity={message.type}
              sx={{ mt: 2 }}
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
        </DialogContent>
        {!afterSubmit ? (
          <>
            <HCaptcha
              sitekey="cfc2a48a-879c-4edc-a7c4-93580dd239a6"
              onVerify={onVerify}
              ref={captchaRef}
            />
            <DialogActions sx={{ px: 3, pb: 2, gap: 1, width: "100%" }}>
              <Button
                onClick={handleClose}
                disabled={loading}
                variant="outlined"
                fullWidth
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogActions>
          </>
        ) : (
          <DialogActions sx={{ px: 3, pb: 2, gap: 1, width: "100%" }}>
            <Button
              onClick={handleClose}
              disabled={loading}
              variant="contained"
              fullWidth
              sx={{
                color: "btn.primary",
              }}
            >
              Close
            </Button>
          </DialogActions>
        )}
      </Box>
    </Dialog>
  );
}
