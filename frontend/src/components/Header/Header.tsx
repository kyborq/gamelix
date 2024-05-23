import Logo from "../../assets/logo.svg?react";
import styles from "./Header.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <header className={styles.Header}>
      <Logo />
      {children}
    </header>
  );
};
