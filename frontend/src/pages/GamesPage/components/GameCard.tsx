import { NavLink } from "react-router-dom";

import { Chart } from "../../../components/Chart/Chart";
import styles from "./GameCard.module.css";

type Props = {
  title: string;
  url: string;
};

export const GameCard = ({ title, url }: Props) => {
  return (
    <div className={styles.Card}>
      <h4 className={styles.Title}>{title}</h4>
      <Chart
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
        ]}
      />

      <NavLink to={url} className={styles.Link} />
    </div>
  );
};
