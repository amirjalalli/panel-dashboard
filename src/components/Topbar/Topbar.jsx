import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import amirimg from "../images/aaa.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            DASHBOARD
            <FavoriteIcon />
          </span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <img src={amirimg} alt="aaa" className="navAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
