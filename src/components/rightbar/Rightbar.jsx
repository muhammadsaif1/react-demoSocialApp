import classes from "./rightbar.module.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src="/assets/gift.png" alt="" />
          <span className={classes.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>
        <img className={classes.rightbarAd} src="/assets/ad.png" alt="" />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendlist}>
        {Users.map(u=>(
          <Online key={u.id} user={u}/>
        ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
