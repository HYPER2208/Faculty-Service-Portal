import React, { useState } from 'react';
import styles from './LogIn.module.css';
import { useLogin } from './../../hooks/useLogIn'
import { useAuthContext } from './../../hooks/useAuthContex';


const LogIn = () => {
    const { login, isLoading, error } = useLogin();
    const { user } = useAuthContext();


    const [ tempUser, setUser ]=useState({
        email:"",
        password:"",
    });

    const handlechange = e =>{
        const { name, value}=e.target;
        setUser({
            ...tempUser,
            [name]:value
        })
    };

    const Submit  = async(e) => {
        
        const { email, password} = tempUser;
        e.preventDefault();

        console.log(tempUser);
        if(email && password ){
            console.log("tf0"); 
            await login(email,password);
            // console.log( user );
        }
        else{
            alert("Invalid Response");
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} method="" action="">
                <h2 className={styles.title}>Login in to Website</h2>
                <input className={styles.form__input} type="text" name="email" value={tempUser.email} placeholder="Email" onChange={handlechange}/>
                <input className={styles.form__input} type="password" name="password" value={tempUser.password} placeholder="Password" onChange={handlechange}/>
                <button className={styles.button} onClick={(e) => Submit(e)} disabled={isLoading}>LOG IN</button>
                { error && <div>{ error }</div>}
                </form>
            </div>
            <div className={styles.switch}>
                <h2 className={styles.title}>Hello Friend !</h2>
                <p className={styles.description}>Enter your personal details and start journey with us</p>
            </div>
        </div>
    );
}

export default LogIn;
