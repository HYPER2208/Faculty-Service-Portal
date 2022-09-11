import React from 'react';
import styles from './Home.module.css';
import { useLogout } from './../../hooks/useLogout'


const Home = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Hello</h2>
            <button className={styles.button} onClick={handleClick}>Log Out</button>
        </div>
    );
}

export default Home;
