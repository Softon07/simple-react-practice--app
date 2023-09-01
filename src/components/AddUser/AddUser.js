import Button from "./Button";

import styles from './AddUser.module.css';

const AddUser = () => {
  return (
    <form className={styles.form} >

      <div class={styles['form-item']}>
        <label class={styles['form-label']}>Username</label>
        <input class={styles['form-input']} type="text" />
      </div>

      <div class={styles['form-item']}>
        <label class={styles['form-label']}>Age (Years)</label>
        <input class={styles['form-input']} type="text" />
      </div>

    <Button />

    </form>
  );
};

export default AddUser;
