import styles from "./Grid.module.css";

type GridItem = {
  id: string;
  title: string;
  path: string;
};

type Props = {
  items: GridItem[];
  renderItem: (item: GridItem) => React.ReactNode;
};

export const Grid = ({ items, renderItem }: Props) => {
  return (
    <div className={styles.Grid}>
      {items.map((item) => (
        <div key={item.id} className={styles.GridCell}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
