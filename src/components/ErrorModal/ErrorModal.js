import Button from "../AddUser/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div className={styles["error-modal"]}>
      <div className={styles["error-title-container"]}>
        <p className={styles["error-title"]}>Invalid input</p>
      </div>

      <p className={styles["error-message"]}>Incorrect data</p>

      <div className={styles["error-button-container"]}>
        <Button />
      </div>
    </div>
  );
};

export default ErrorModal;
