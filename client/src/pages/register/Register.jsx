import { useRef } from "react";
import classes from "./register.module.css"
import axios from "axios"
// const axios = require("axios")


const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
   

    const handleClick=async(e)=>{
        e.preventDefault();
        if (passwordAgain.current.value !==password.current.value) {
            // password.current.setCustomValidity("Passwords dont match")
            console.log("hiii")
        }
        else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try{

                 await axios.post("/auth/register",user);
                    // redirect("/")

            }catch(err){
                console.log(err)
            }
        }

    }

    return (
        <div className={classes.login}>
        <div className={classes.loginWrapper}>
            <div className={classes.loginLeft}>
                <h3 className={classes.loginLogo}>Saifsocial</h3>
                <span className={classes.loginDesc}>
                    Connect with friends and the world around you and saifsocial.
                </span>
            </div>
            <div className={classes.loginRight}>
                <form className={classes.loginBox} onSubmit={handleClick}>
                    <input placeholder="Username"  ref={username} type="text" className={classes.loginInput} required/>
                    <input placeholder="Enter Your email"  ref={email} type="Email" className={classes.loginInput} required/>
                    <input placeholder="password" type="password"  ref={password} className={classes.loginInput} required minLength="6"/>
                    <input placeholder="Confirm password" type="password" ref={passwordAgain} className={classes.loginInput} required/>
                    <button className={classes.loginButton} type="submit">Sign Up</button>
                    <button className={classes.loginRegisterButton}>Already have an account? Login</button>
                </form>
            </div>
        </div>
            
        </div>
    );
}

export default Register;
