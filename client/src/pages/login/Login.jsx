import classes from "./login.module.css"

const Login = () => {
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
                    <input placeholder="Enter Your email" type="Email" className={classes.loginInput} required/>
                    <input placeholder="password" type="password" className={classes.loginInput} required/>
                    <button className={classes.loginButton}>Login</button>
                    <span className={classes.loginForget}>Fogot password</span>
                    <button className={classes.loginRegisterButton}>Create a New Account</button>
                </div>
            </div>
        </div>
            
        </div>
    );
}

export default Login;
