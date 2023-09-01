import SingleUser from "./SingleUser";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles["users-list"]}>
      {props.users.map((user) => {
        return <SingleUser key={user.key} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default UsersList;
