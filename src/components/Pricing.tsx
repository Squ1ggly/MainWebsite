import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailDialog from "./EmailDialog";

const tiers = [
  {
    title: "Standard",
    price: "$85",
    description: [
      "Everything in Basic, plus:",
      "Up to 20 hours per month",
      "Security policy setup",
      "Priority email support (24hr)",
      "System administration tasks",
      "Monthly check-in reports",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    title: "Basic Support",
    subheader: "Best Value",
    price: "$45",
    description: [
      "Up to 10 hours per month",
      "Azure Entra ID user management",
      "Basic account administration",
      "Email support (48hr response)",
      "Perfect for small teams",
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
    buttonColor: "primary",
    highlighted: true,
  },
  {
    title: "Custom",
    price: "Custom",
    description: [
      "Hourly or project rates",
      "One-time projects",
      "Flexible scheduling",
      "Direct communication",
    ],
    buttonText: "Discuss Pricing",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

export default function Pricing() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedTier, setSelectedTier] = React.useState("");

  const handleOpenDialog = (tierTitle: string) => {
    setSelectedTier(tierTitle);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Container
      id="pricing"
      sx={{
        pt: 12,
        pb: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Box>
        <Typography
          component="h2"
          variant="h3"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          sx={{ color: "text.primary", mb: 2 }}
        >
          Simple, Transparent Pricing
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: "1.1rem" }}
        >
          Flexible plans for small businesses. All plans include Azure
          administration and IT support tailored to your needs.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {tiers.map((tier, _index) => (
          <Box>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: 360,
                height: "100%",
                minWidth: "290px",
                minHeight: 420,
                transition: "all 0.3s ease",
                ...(tier.highlighted && {
                  border: "2px solid",
                  borderColor: "primary.main",
                  transform: "scale(1.05)",
                  boxShadow: 8,
                }),
                "&:hover": {
                  transform: tier.highlighted
                    ? "scale(1.07)"
                    : "translateY(-4px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography component="h3" variant="h5" fontWeight="bold">
                    {tier.title}
                  </Typography>
                  {tier.subheader && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      color="primary"
                      size="small"
                    />
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Typography
                    component="span"
                    variant="h3"
                    fontWeight="bold"
                    color="primary.main"
                  >
                    {tier.price}
                  </Typography>
                  <Typography
                    component="span"
                    variant="h6"
                    color="text.secondary"
                  >
                    &nbsp;/month
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          color: "primary.main",
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ p: 0 }}>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  color={tier.buttonColor as "primary"}
                  onClick={() => handleOpenDialog(tier.title)}
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Contact Dialog */}
      <EmailDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        planTitle={selectedTier}
      ></EmailDialog>
    </Container>
  );
}
