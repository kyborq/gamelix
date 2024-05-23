import styles from "./Content.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  return <div className={styles.Content}>{children}</div>;
};
