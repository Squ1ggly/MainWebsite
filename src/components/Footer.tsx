import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ArrowDownward } from "@mui/icons-material";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(33, 150, 243, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(33, 150, 243, 0.6);
  }
`;

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        py: 10,
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        },
      }}
    >
      <Stack sx={{ alignItems: "center", gap: 2 }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            fontWeight: 600,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          Check Out My GitHub
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: "400px",
            mb: 2,
          }}
        >
          Explore my projects, contributions, and open source work
        </Typography>

        <Box
          sx={{
            animation: `${bounce} 2s ease-in-out infinite`,
            opacity: 0.7,
          }}
        >
          <ArrowDownward fontSize="large" />
        </Box>

        <IconButton
          color="inherit"
          size="large"
          href="https://github.com/squ1ggly"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{
            alignSelf: "center",
            mt: 1,
            background: "linear-gradient(45deg, #24292e 30%, #0d1117 90%)",
            color: "white",
            animation: `${glow} 3s ease-in-out infinite`,
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(45deg, #0d1117 30%, #24292e 90%)",
              transform: "scale(1.1) rotate(5deg)",
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: 32 }} />
        </IconButton>

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            mt: 2,
            opacity: 0.6,
          }}
        >
          @squ1ggly
        </Typography>
      </Stack>
    </Container>
  );
}
