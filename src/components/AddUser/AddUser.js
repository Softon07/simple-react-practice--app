import Button from "./Button";

import styles from './AddUser.module.css';

const AddUser = () => {
  return (
    <form className={styles.form} >

      <div className={styles['form-item']}>
        <label className={styles['form-label']}>Username</label>
        <input className={styles['form-input']} type="text" />
      </div>

      <div className={styles['form-item']}>
        <label className={styles['form-label']}>Age (Years)</label>
        <input className={styles['form-input']} type="text" />
      </div>

    <Button />

    </form>
  );
};

export default AddUser;
