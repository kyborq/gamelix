import styles from "./PageHeader.module.css";

type Props = {
  title: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
};

export const PageHeader = ({ title, children, action }: Props) => {
  return (
    <div className={styles.PageHeader}>
      <div className={styles.Content}>
        <h2 className={styles.Title}>{title}</h2>
        <div className={styles.Navigation}>{children}</div>
      </div>
      {action}
    </div>
  );
};
