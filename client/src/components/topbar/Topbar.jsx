import classes from "./Topbar.module.css";
// import { Search } from "@mui/icons-material";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { useContext } from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
const Topbar = () => {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FLODER;

    return (
        <div className={classes.topbarContainer}>
            <div className={classes.topbarLeft}>
            <Link className={classes.linkStyle} to="/">
                <span className={classes.topbarLogo}>Saif-social</span>
                </Link>
            </div>
            <div className={classes.topbarCenter}>
                <div className={classes.searchbar}>
                <Search className={classes.searchIcon }/>
                <input placeholder="Search for friends, posts or videos" className={classes.searchInput}></input>
                </div>
            </div>
            <div className={classes.topbarRight}>
                <div className={classes.topbarLinks}>
                    <span className={classes.topbarLink}>Home</span>
                    <span className={classes.topbarLink}>Timeline</span>
                </div>
                <div className={classes.topbarIcons}>
                    <div className={classes.topbarIconItem}>
                        <Person/>
                        <span className={classes.topbarIconBadge}>1</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Chat/>
                        <span className={classes.topbarIconBadge}>2</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Notifications/>
                        <span className={classes.topbarIconBadge}>1</span>
                    </div>
                </div>
                <Link to={`/profile${user.username}</div>`}>
                <img src={ user.profilePicture ? PF+user.profilePicture: PF+"saif.jpg"}alt="" className={classes.topbarImg}></img>
                </Link>            
            </div>
        </div>
    );
}

export default Topbar;
