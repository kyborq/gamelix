import { HomeIcon, ProfileIcon } from "../../assets/icons";
import { NavButton } from "../NavButton";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavButton icon={<HomeIcon />} path="/" />
      <NavButton icon={<ProfileIcon />} path="/profile" />
    </nav>
  );
};
