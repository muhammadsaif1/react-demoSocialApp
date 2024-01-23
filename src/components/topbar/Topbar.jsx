import classes from "./Topbar.module.css";
// import { Search } from "@mui/icons-material";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

const Topbar = () => {
    return (
        <div className={classes.topbarContainer}>
            <div className={classes.topbarLeft}>
                <span className={classes.topbarLogo}>Saif-social</span>
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

                <img src="/assets/person/1.jpeg" alt="" className={classes.topbarImg}></img>
            </div>
        </div>
    );
}

export default Topbar;
