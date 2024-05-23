import { classes } from "../../utils/classes";
import styles from "./PageHeader.module.css";

type Props = {
  title: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  primary?: boolean;
};

export const PageHeader = ({ title, children, action, primary }: Props) => {
  return (
    <div className={classes(styles.PageHeader, primary && styles.Primary)}>
      <div className={styles.Content}>
        <h2 className={styles.Title}>{title}</h2>
        <div className={styles.Navigation}>{children}</div>
      </div>
      {action}
    </div>
  );
};
