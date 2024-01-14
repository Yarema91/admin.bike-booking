import { useAppDispatch } from "../../redux/hooks";
import { updateBikeStatus, deleteBike } from "../../redux/bikes/actions";
import cross from "../../assets/icons/cross.svg";
import styles from "./ListItem.module.css";
import { Bike } from '../../types/models';
import { ChangeEvent } from "react";
import { convertToInternalStatus } from "../../redux/bikes/selectors";

interface ListItemProps extends Bike {
}

export const ListItem: React.FC<ListItemProps> = ({ id, name, type, color, bikeId, status, price }) => {

  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedStatus = convertToInternalStatus(event.currentTarget.value);

    if (updatedStatus !== undefined) {
      dispatch(updateBikeStatus({ id, status: updatedStatus }));
    } else {
      // Handle the case when the conversion fails
      console.error('Invalid status:', event.currentTarget.value);
    }
  };

  const handleClick = () => {
    dispatch(deleteBike(id));
  };

  const itemClass = () => {
    switch (status) {
      case "unavailable":
        return `${styles.item} ${styles.unavailable}`;
      case "busy":
        return `${styles.item} ${styles.busy}`;
      default:
        return `${styles.item}`;
    }
  };

  return (
    <li className={itemClass()}>
      <div>
        <p className={styles["item-name"]}>
          <span>{name}</span> - {type} ({color})
        </p>

        <p className={styles["item-id"]}>Id: {bikeId}</p>

        <label className={styles["item-status"]}>
          Status:
          <select name="status" value={status} onChange={handleChange}>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
            <option value="busy">Busy</option>
          </select>
        </label>
      </div>

      <div>
        <button
          type="button"
          className={styles["item-button"]}
          onClick={handleClick}
        >
          <img src={cross} alt="cross-icon" />
        </button>

        <p className={styles["item-price"]}>{price} UAH/hr.</p>
      </div>
    </li>
  );
};
