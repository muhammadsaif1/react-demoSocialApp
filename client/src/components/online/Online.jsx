import classes from "./online.module.css";


const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FLODER;
    return (
              <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                className={classes.rightbarProfileImg}
                src={PF+user.profilePicture}
                alt=""
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>{user.username}</span>
          </li>
    );
}

export default Online;
