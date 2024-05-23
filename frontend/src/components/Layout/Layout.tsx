import styles from "./Layout.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <h3 className={styles.Title}>{title}</h3>
      </div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
