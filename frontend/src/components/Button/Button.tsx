import styles from "./Button.module.css";

type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {label}
    </button>
  );
};
