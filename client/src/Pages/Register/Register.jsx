import React, { useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';

const Register = () => {

    const [ user, setUser ]=useState({
        firstName:"",
        middleName:"",
        lastName:"",
        role:"",
        email:"",
        phone:"",
        department:"",
        designation:"",
        basicPay:"",
        ta:"",
        hra:"",
        da:"",
        password:"",
    })

    const handlechange = e =>{
        const { name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const {  firstName, lastName, role, email,
            phone, department, designation, basicPay, ta, hra, da} = user;
        console.log(firstName);
        console.log(lastName);
        console.log(role);
        console.log(email);
        console.log(phone);
        console.log(department);
        console.log(designation);
        console.log(basicPay);
        console.log(ta);
        console.log(hra);
        console.log(da);


        
        if(email && role && firstName && lastName && phone && 
            department && designation && basicPay && ta && hra && da ){
            alert("Registered");
            axios.post("http://127.0.0.1:5000/user/add", user)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => console.log(err));
        }
        else{
            alert("Please Fill all Fields");
        }
    }

    return (
        <div >
            <div>
                <form className={styles.form} method="" action="">

                    <h1 className={styles.title}>Register</h1>     
                    <p>Register New Faculty/Staff</p>
                    <input className={styles.form__input} type="text" name="firstName" value={user.firstName} placeholder="Firstname" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="middleName" value={user.middleName} placeholder="Middlename" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="lastName" value={user.lastName} placeholder="LastName" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="role" value={user.role} placeholder="Role" onChange={handlechange} />
                    <input className={styles.form__input} type="email" name="email" value={user.email} placeholder="Email" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="phone" value={user.phone}  placeholder="Contact Number" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="department" value={user.department} placeholder="Department Name" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="designation" value={user.designation} placeholder="Designation" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="basicPay" value={user.basicPay} placeholder="Basic Pay" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="ta" value={user.ta} placeholder="TA" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="hra" value={user.hra} placeholder="HRA" onChange={handlechange} />
                    <input className={styles.form__input} type="text" name="da" value={user.da} placeholder="DA" onChange={handlechange} />

                <button className={styles.button} onClick={register}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;