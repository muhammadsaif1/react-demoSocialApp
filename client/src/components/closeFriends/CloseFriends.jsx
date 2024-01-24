import classes from "./closeFriends.module.css"

const CloseFriends = ({user}) => {
    return (
        <li className={classes.sidebarFriend}>
            <img className={classes.sidebarFriendImage} src= {user.profilePicture} alt=""></img>
            <span className={classes.sidebarFriendName}> {user.username} </span>
          </li>
    );
}

export default CloseFriends;
