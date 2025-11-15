import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import CommandBar from "./components/CommandBar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import MyExperience from "./components/MyExpirence";
import Footer from "./components/Footer";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <CommandBar />
      <Hero />
      <div>
        <MyExperience />
        <Pricing />
        <Footer />
      </div>
    </AppTheme>
  );
}
