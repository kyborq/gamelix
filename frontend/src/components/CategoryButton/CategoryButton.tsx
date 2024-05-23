import { NavLink } from "react-router-dom";

import { classes } from "../../utils/classes";
import styles from "./CategoryButton.module.css";

type Props = {
  label: string;
  current?: boolean;
  path?: string;
};

export const CategoryButton = ({ label, current, path }: Props) => {
  if (path) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          classes(styles.Button, isActive && styles.Current)
        }
      >
        {label}
      </NavLink>
    );
  }

  return (
    <button className={classes(styles.Button, current && styles.Current)}>
      {label}
    </button>
  );
};
