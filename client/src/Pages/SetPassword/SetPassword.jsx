import React, { useState } from 'react';
import styles from './SetPassword.module.css';
// import { useLogin } from './../../hooks/useLogIn'
import axios from 'axios';

// import { useAuthContext } from './../../hooks/useAuthContex';


const LogIn = () => {
    // const { login, isLoading, error } = useLogin();

    const [ tempUser, setUser ]=useState({
        email:"",
        cpassword:"",
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
        const { email, password, cpassword} = tempUser;
        e.preventDefault();
 
        console.log(tempUser);
        if(email && (password || cpassword) ){
            console.log("tf0"); 
            alert("Registered");
            axios.post("http://127.0.0.1:5000/user/add", tempUser);
        }
        else{
            alert("Invalid Response");
        }
    };


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} method="" action="">
                <h2 className={styles.title}>Set Your Password</h2>
                <input className={styles.form__input} type="text" name="email" value={tempUser.email} placeholder="Email" onChange={handlechange}/>
                <input className={styles.form__input} type="password" name="cpassword" value={tempUser.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="password" name="password" value={tempUser.password} placeholder="Password" onChange={handlechange}/>
                <button className={styles.button} onClick={(e) => Submit(e)} >Set Password</button>
                {/* { error && <div>{ error }</div>} */}
                </form>
            </div>
            <div className={styles.switch}>
                <p className={styles.description}>Please Set your Password</p>
            </div>
        </div>
    );
}

export default LogIn;
