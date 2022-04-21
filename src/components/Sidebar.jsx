import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { SidebarOption } from "./SidebarOption";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ThemeContext } from "../contexts/ThemeContext";

export const Sidebar = () => {
  const [{ isDark }] = useContext(ThemeContext);
  return (
    <div className={isDark ? styles.mainDiv1 : styles.mainDiv}>
      <div className={styles.user}>
        <SidebarOption Icon={AccountCircleIcon} />
      </div>
      <div className={styles.firstDiv}>
        <SidebarOption className={styles.icon} Icon={SignalCellularAltIcon} />
        <SidebarOption Icon={MapIcon} />
        <SidebarOption Icon={AddShoppingCartIcon} />
        <SidebarOption Icon={SettingsIcon} />
        <SidebarOption Icon={MessageIcon} />
        <SidebarOption Icon={BackupTableIcon} />
      </div>
      <div className={styles.user}>
        <SidebarOption Icon={AddCircleIcon} />
      </div>
    </div>
  );
};
