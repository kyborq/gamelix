import { Chart } from "../Chart/Chart";
import styles from "./Card.module.css";

type Props = {
  title: string;
};

export const Card = ({ title }: Props) => {
  return (
    <div className={styles.Card}>
      <h3 className={styles.Title}>{title}</h3>
      <Chart
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 0 },
        ]}
      />
    </div>
  );
};
