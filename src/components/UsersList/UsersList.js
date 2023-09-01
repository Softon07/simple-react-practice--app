import SingleUser from './SingleUser';
import styles from './UsersList.module.css';

const UsersList = () => {
    return (
        <div className={styles['users-list']}>
            <SingleUser />
            <SingleUser />
            <SingleUser />
        </div>
    );
}

export default UsersList;