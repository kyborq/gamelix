import { classes } from "../../utils/classes";
import styles from "./CategoryButton.module.css";

type Props = {
  label: string;
  current?: boolean;
};

export const CategoryButton = ({ label, current }: Props) => {
  return (
    <button className={classes(styles.Button, current && styles.Current)}>
      {label}
    </button>
  );
};
