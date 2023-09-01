import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${styles["form-item"]} ${styles.button}`} onClick={props.onClick}>{props.buttonName}</button>
  );
};

export default Button;
