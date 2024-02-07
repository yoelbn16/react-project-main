import { Box, BottomNavigationAction } from "@mui/material";
import {
  alwaysButtons,
  loggedInButtons,
  loggedOutButtons,
  bizButtons,
  adminButtons,
} from "./myButtons";

import NavLinkComponent from "../NavLinkComponent";
import { useContext } from "react";
import LogInContext from "../../store/loginContext";

const BottomButtons = () => {
  const { logIn } = useContext(LogInContext);
  const loggedIn = logIn;
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {alwaysButtons.map((myItem, index) => (
        <NavLinkComponent to={myItem.to} key={"linksnav" + index}>
          <BottomNavigationAction
            showLabel
            label={myItem.title}
            icon={myItem.icon}
          />
        </NavLinkComponent>
      ))}

      {loggedIn &&
        loggedInButtons.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav2" + index}>
            <BottomNavigationAction
              showLabel
              label={myItem.title}
              icon={myItem.icon}
            />{" "}
          </NavLinkComponent>
        ))}
      {loggedIn &&
        loggedIn.isBusiness &&
        bizButtons.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav3" + index}>
            <BottomNavigationAction
              showLabel
              label={myItem.title}
              icon={myItem.icon}
            />{" "}
          </NavLinkComponent>
        ))}
      {loggedIn &&
        loggedIn.isAdmin &&
        adminButtons.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav4" + index}>
            <BottomNavigationAction
              showLabel
              label={myItem.title}
              icon={myItem.icon}
            />{" "}
          </NavLinkComponent>
        ))}
      {!loggedIn &&
        loggedOutButtons.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav5" + index}>
            <BottomNavigationAction
              showLabel
              label={myItem.title}
              icon={myItem.icon}
            />{" "}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default BottomButtons;
