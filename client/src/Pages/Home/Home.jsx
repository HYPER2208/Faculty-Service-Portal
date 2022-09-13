import React from 'react';
import styles from './Home.module.css';
import { useLogout } from './../../hooks/useLogout'
import { useAuthContext } from './../../hooks/useAuthContex';



const Home = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext();


    const handleClick = () => {
        logout()
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Hello <span>{user.email}</span></h2>
            <button className={styles.button} onClick={handleClick}>Log Out</button>
        </div>
    );
}

export default Home;
