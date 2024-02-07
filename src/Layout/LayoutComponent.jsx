import { useState } from "react";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import tmc from "twin-moon-color";
import { CssBaseline, Typography } from "@mui/material";
import useAutoLogin from "../hooks/useAutoLogIn";
import PropTypes from "prop-types";

const LayoutComponent = ({ children }) => {
  const finishAutoLogin = useAutoLogin();
  const [isDarkTheme, SetDarkTheme] = useState(false);

  const themes = tmc({
    "text.headerColor": "!gray",
    "text.headerActive": "*white",
    favActive: "*FB0000",
  });

  const darkMode = createTheme(themes.dark);
  const lightMode = createTheme(themes.light);

  const handleThemeChange = (ClientChecked) => {
    SetDarkTheme(ClientChecked);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <CssBaseline />
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
      />
      <MainComponent>
        {finishAutoLogin ? (
          children
        ) : (
          <Typography variant="h1">Loading...</Typography>
        )}
      </MainComponent>
      <FooterComponent />
    </ThemeProvider>
  );
};

LayoutComponent.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
