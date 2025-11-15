import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import WorkIcon from "@mui/icons-material/Work";

const items = [
  {
    icon: <ViewQuiltRoundedIcon sx={{ fontSize: 32 }} />,
    title: "Torsion Homes",
    role: "IT Operations and Support",
    period: "October 2020 – December 2023",
    color: "#1976d2",
    description:
      "Managed IT infrastructure and Active Directory services while providing comprehensive technical support",
    longDescription: (
      <>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            IT Operations and Support
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Torsion Homes
          </Typography>
          <Chip
            label="October 2020 – December 2023"
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" paragraph>
          Responsible for managing Active Directory services and providing
          technical support to staff across the organization.
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkIcon fontSize="small" /> Key Responsibilities
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2" paragraph>
                Azure Active Directory administration
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Computer systems administration and management
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                General Level 1 and Level 2 IT support
              </Typography>
            </li>
          </Box>
        </Box>

        <Box sx={{ my: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🏆 Key Achievements
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2" paragraph>
                Identified, resolved, and upgraded security vulnerabilities
                across the company
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Implemented a new local server infrastructure, transitioning
                Torsion to an RDS environment
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Migrated the business from one system platform to another
              </Typography>
            </li>
          </Box>
        </Box>
      </>
    ),
  },
  {
    icon: <EdgesensorHighRoundedIcon sx={{ fontSize: 32 }} />,
    title: "Rapid Platform",
    role: "IT Support Developer",
    period: "January 2023 – Present",
    color: "#9c27b0",
    description:
      "Developed production-ready code and integrations for SaaS platform while supporting enterprise clients",
    longDescription: (
      <>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            IT Support Developer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Rapid Platform
          </Typography>
          <Chip
            label="January 2023 – Present"
            size="small"
            color="success"
            sx={{ mt: 1 }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" paragraph>
          Provide technical support for company partners and contribute to
          software development across multiple projects.
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkIcon fontSize="small" /> Key Responsibilities
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2" paragraph>
                Collaborating with the software development team
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Developing and maintaining software for Rapid clients
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Contributing to software projects following best coding
                practices
              </Typography>
            </li>
          </Box>
        </Box>

        <Box sx={{ my: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🏆 Key Achievements
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2" paragraph>
                Developed production code for Guardian Child Care to automate
                internal processes
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Assisted with the setup and rollout of the FreePBX phone system
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Implemented major features for the Rapid Platform product
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Developed Azure Functions to automate workflows for Rapid
                clients
              </Typography>
            </li>
          </Box>
        </Box>
      </>
    ),
  },
  {
    icon: <DevicesRoundedIcon sx={{ fontSize: 32 }} />,
    title: "Kaizen Homes",
    role: "Azure Entra ID Administrator",
    period: "2023 – Present",
    color: "#ed6c02",
    description:
      "Maintaining and administering Azure Entra ID infrastructure for enterprise operations",
    longDescription: (
      <>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Azure Entra ID Administrator
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Kaizen Homes
          </Typography>
          <Chip
            label="2023 – Present"
            size="small"
            color="success"
            sx={{ mt: 1 }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" paragraph>
          Responsible for maintaining and administering Azure Entra ID (formerly
          Azure Active Directory) services to support Kaizen Homes' cloud
          infrastructure and identity management needs.
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkIcon fontSize="small" /> Key Responsibilities
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2" paragraph>
                Azure Entra ID user and group management
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Identity and access management (IAM) administration
              </Typography>
            </li>
            <li>
              <Typography variant="body2" paragraph>
                Security policy implementation and monitoring
              </Typography>
            </li>
          </Box>
        </Box>
      </>
    ),
  },
];

export default function MyExperience() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="experiences">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          component="h2"
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "text.primary",
            mb: 2,
          }}
        >
          Professional Experience
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          A journey through roles where technology meets impact
        </Typography>
      </Box>

      {/* Timeline Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 6,
          flexWrap: "wrap",
        }}
      >
        {items.map(({ icon, title, color }, index) => (
          <Box
            key={index}
            onClick={() => handleItemClick(index)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              position: "relative",
              pb: 2,
              transition: "all 0.3s ease",
              opacity: selectedItemIndex === index ? 1 : 0.5,
              transform:
                selectedItemIndex === index ? "scale(1.1)" : "scale(1)",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: selectedItemIndex === index ? color : "action.hover",
                color: selectedItemIndex === index ? "white" : "text.secondary",
                transition: "all 0.3s ease",
                boxShadow: selectedItemIndex === index ? 4 : 0,
              }}
            >
              {icon}
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={selectedItemIndex === index ? "bold" : "regular"}
              sx={{
                color: selectedItemIndex === index ? color : "text.secondary",
              }}
            >
              {title}
            </Typography>
            {selectedItemIndex === index && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: 3,
                  bgcolor: color,
                  borderRadius: 1,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Content Display */}
      <Fade in={true} key={selectedItemIndex} timeout={500}>
        <Paper
          elevation={0}
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: 5,
            borderLeft: 4,
            borderColor: selectedFeature.color,
            bgcolor: "background.paper",
            borderRadius: 2,
            minHeight: 400,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: selectedFeature.color,
              borderRadius: "10px",
              "&:hover": {
                opacity: 0.8,
              },
            },
          }}
        >
          {selectedFeature.longDescription}
        </Paper>
      </Fade>
    </Container>
  );
}
