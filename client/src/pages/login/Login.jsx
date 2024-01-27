import { useContext, useRef } from "react";
import classes from "./login.module.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext)
  function handleClick(e) {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch)
  };
  console.log(user);
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
            <input
              placeholder="Enter Your email"
              type="Email"
              className={classes.loginInput}
              required
              ref={email}
            />
            <input
              placeholder="password"
              type="password"
              className={classes.loginInput}
              required
              ref={password}
              minLength="6"
            />
            <button className={classes.loginButton} disabled={isFetching}>{isFetching ? <CircularProgress className={classes.loginHandling}/> :"Login"}</button>
            <span className={classes.loginForget}>Fogot password</span>
            <button className={classes.loginRegisterButton}>
            {isFetching ? <CircularProgress className={classes.loginHandling}/> :"Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
