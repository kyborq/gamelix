import { NavLink } from "react-router-dom";

import { classes } from "../../utils/classes";
import styles from "./NavButton.module.css";

type Props = {
  path: string;
  icon: React.ReactNode;
};

export const NavButton = ({ icon, path }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classes(styles.NavButton, isActive && styles.Active)
      }
    >
      {icon}
    </NavLink>
  );
};
