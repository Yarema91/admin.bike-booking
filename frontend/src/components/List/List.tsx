import { useEffect } from "react";
import { getBikes } from "../../redux/bikes/actions";
import { getAll } from "../../redux/bikes/selectors";
import { ListItem } from "../ListItem/ListItem";
import styles from "./List.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Bike } from '../../types/models';
import { RootState } from "../../redux/store";

interface ListProps {
  bikes?: Bike[];
}

export const List: React.FC<ListProps> = () => {
  const dispatch = useAppDispatch();

  const bikes = useAppSelector((state: RootState) => getAll(state));
  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <>
      {bikes.length > 0 ? (
        <ul className={styles.list}>
          {bikes.map(({ _id, name, type, color, id, status, price }) => (
            <ListItem
              key={_id}
              name={name}
              type={type}
              color={color}
              id={_id}
              bikeId={id}
              status={status}
              price={price} _id={""} wheelSize={0} description={""} />
          ))}
        </ul>
      ) : (
        <p className={styles.placeholder}>No bikes yet</p>
      )}
    </>
  );
};
