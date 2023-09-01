import styles from "./SingleUser.module.css";

const SingleUser = () => {
  return (
    <div className={styles.user}>
      <p>
        Imię<span> (Wiek)</span>
      </p>
    </div>
  );
};

export default SingleUser;
