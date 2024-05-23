import styles from "./Side.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Side = ({ children }: Props) => {
  return <div className={styles.Side}>{children}</div>;
};
