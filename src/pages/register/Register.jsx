import classes from "./register.module.css"

const Register = () => {
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
                <div className={classes.loginBox}>
                    <input placeholder="Username" type="text" className={classes.loginInput} required/>
                    <input placeholder="Enter Your email" type="Email" className={classes.loginInput} required/>
                    <input placeholder="password" type="password" className={classes.loginInput} required/>
                    <input placeholder="Confirm password" type="password" className={classes.loginInput} required/>
                    <button className={classes.loginButton}>Sign Up</button>
                    <button className={classes.loginRegisterButton}>Already have an account? Login</button>
                </div>
            </div>
        </div>
            
        </div>
    );
}

export default Register;
