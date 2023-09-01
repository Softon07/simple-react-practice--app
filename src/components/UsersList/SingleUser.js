import styles from "./SingleUser.module.css";

const SingleUser = (props) => {
  return (
    <div className={styles.user}>
      <p>
        {props.name}
        <span> ({props.age} years old)</span>
      </p>
    </div>
  );
};

export default SingleUser;
