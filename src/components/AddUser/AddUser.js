import { useState } from "react";
import Button from "./Button";
import styles from "./AddUser.module.css";

let id = 2;

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserSubmitHandler = (event) => {
    event.preventDefault();

    id++;
    const user = {
      key: id,
      name: userName,
      age: age,
    };

    props.onAddUser(user);
  };

  return (
    <form onSubmit={addUserSubmitHandler} className={styles.form}>
      <div className={styles["form-item"]}>
        <label className={styles["form-label"]}>Username</label>
        <input
          className={styles["form-input"]}
          type="text"
          value={userName}
          onChange={usernameHandler}
        />
      </div>

      <div className={styles["form-item"]}>
        <label className={styles["form-label"]}>Age (Years)</label>
        <input
          className={styles["form-input"]}
          type="text"
          value={age}
          onChange={ageHandler}
        />
      </div>
      <Button />
    </form>
  );
};

export default AddUser;
