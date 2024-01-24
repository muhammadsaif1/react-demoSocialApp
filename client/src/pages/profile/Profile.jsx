import classes from "./profile.module.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed"

const Profile = () => {
    return (
        <>
        <Topbar/>
        <div className={classes.profile}>
        <Sidebar/>
        <div  className={classes.profileRight}>
        <div className={classes.profileRightTop}>
        <div className={classes.profileCover}>
            <img className={classes.profileCoverImg} src="assets/post/3.jpeg" alt="" />
            <img className={classes.profileUserImg} src="assets/saif.jpg" alt="" />
        </div>
        <div className={classes.profileInfo}>
            <h4 className={classes.profileInfoName}>Muhammad Saif</h4>
            <span className={classes.profileInfoDescr}>Software Engineer</span>
        </div>
        </div>
        <div className={classes.profileRightBottom}>
            <Feed/>
            <Rightbar profile/>
        </div>
        </div>
        </div>
        
    </>
    );
}

export default Profile;
