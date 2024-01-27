import classes from "./closeFriends.module.css"

const CloseFriends = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FLODER;
    return (
        <li className={classes.sidebarFriend}>
            <img className={classes.sidebarFriendImage} src= {PF+user.profilePicture} alt=""></img>
            <span className={classes.sidebarFriendName}> {user.username} </span>
          </li>
    );
}

export default CloseFriends;
