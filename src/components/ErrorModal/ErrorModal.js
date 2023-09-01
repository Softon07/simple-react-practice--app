import Button from "../AddUser/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeErrorModal = () => {
    props.setIsErrorModalVisible(false);
  };

  return (
    <div className={styles["error-modal"]}>
      <div className={styles["error-title-container"]}>
        <p className={styles["error-title"]}>Invalid input</p>
      </div>

      <p className={styles["error-message"]}>{props.error}</p>

      <div className={styles["error-button-container"]}>
        <Button onClick={closeErrorModal} buttonName="Okay" />
      </div>
    </div>
  );
};

export default ErrorModal;
