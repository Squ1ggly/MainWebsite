import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import CommandBar from "./components/CommandBar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import MyExperience from "./components/MyExpirence";
import Footer from "./components/Footer";
import { Divider } from "@mui/material";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <CommandBar />
      <Hero />
      <div>
        <Divider />
        <MyExperience />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
