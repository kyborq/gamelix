import { classes } from "../../utils/classes";
import styles from "./SideButton.module.css";

type Props = {
  icon?: React.ReactNode;
  label: string;
  current?: boolean;
};

export const SideButton = ({ icon, label, current }: Props) => {
  return (
    <button className={classes(styles.SideButton, current && styles.Active)}>
      {icon}
      {label}
    </button>
  );
};
