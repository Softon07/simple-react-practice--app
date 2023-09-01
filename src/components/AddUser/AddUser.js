import { useState } from "react";
import Button from "./Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

let id = 2;

const AddUser = (props) => {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

    let isValid = false;

    if (user.name === "" && (user.age > 0 || user.age !== "")) {
      setErrorMessage("Invalid user name");
      setIsErrorModalVisible(true);
    } else if (user.name !== "" && (user.age < 0 || user.age === "")) {
      setErrorMessage("Invalid user age");
      setIsErrorModalVisible(true);
    } else if (user.name === "" && (user.age < 0 || user.age === "")) {
      setErrorMessage("Invalid name and age");
      setIsErrorModalVisible(true);
    } else {
      isValid = true;
    }

    if (isValid) {
      props.onAddUser(user);
      setUserName("");
      setAge("");
    }
  };

  return (
    <form onSubmit={addUserSubmitHandler} className={styles.form}>
      {isErrorModalVisible && (
        <ErrorModal
          error={errorMessage}
          setIsErrorModalVisible={setIsErrorModalVisible}
        />
      )}
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
      <Button buttonName="Add User" />
    </form>
  );
};

export default AddUser;
