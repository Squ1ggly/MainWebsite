import { alpha, styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  Toolbar,
  Menu,
} from "@mui/material";
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { Menu as MenuIcon } from "@mui/icons-material";
import * as React from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

const NavButton = styled(Button)(() => ({
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-1px)",
  },
}));

const menuItems = [
  { label: "GitHub", icon: <GitHubIcon />, url: "https://github.com/squ1ggly" },
  {
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/samuel-tomlin/",
  },
  { label: "Dev.to", icon: <ArticleIcon />, url: "https://dev.to" },
];

export default function AppAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    handleClose();
  };

  React.useEffect(() => {
    console.log("Running the useEffect")
    const mediaQuery = window.matchMedia('(min-width: 900px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches && open) {
        handleClose();
      }
    };

    // Check on mount only
    if (mediaQuery.matches && open) {
      handleClose();
    }

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [open, handleClose]);


  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Logo/Brand Area */}
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "1.25rem",
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ST
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              px: 2,
            }}
          >
            {menuItems.map((item) => (
              <NavButton
                key={item.label}
                variant="text"
                color="primary"
                size="small"
                startIcon={item.icon}
                onClick={() => handleLinkClick(item.url)}
                sx={{
                  display: { xs: "none", md: "inherit" },
                }}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>

          {/*Mobile Menu*/}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              px: 2,
            }}
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                minWidth: 0,
                display: { xs: "inherit", md: "none" },
              }}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                display: { xs: "inherit", md: "none" },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  // variant="text"
                  color="primary"
                  // size="small"
                  // startIcon={}
                  onClick={() => handleLinkClick(item.url)}
                >
                  <Box sx={{ paddingRight: "5px" }}>{item.icon} </Box>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <ColorModeIconDropdown />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
