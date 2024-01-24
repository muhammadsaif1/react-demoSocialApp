import classes from "./rightbar.module.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({profile}) => {

  const HomeRightbar = ()=>{
    return(
      <>
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
      </>
    );
  };

  const ProfileRightbar = () =>{
    return(<>
      <h4 className={classes.rightbatTitle}>User Information</h4>
      <div className={classes.rightbarInfo}>
        <div className={classes.rightbatInfoItem}>
          <span className={classes.rightbarInfoKey}>City:</span>
          <span className={classes.rightbarInfoValue}>Hala New</span>
        </div>
        <div className={classes.rightbatInfoItem}>
          <span className={classes.rightbarInfoKey}>From:</span>
          <span className={classes.rightbarInfoValue}>Pakistan</span>
        </div>
        <div className={classes.rightbatInfoItem}>
          <span className={classes.rightbarInfoKey}>Relationship:</span>
          <span className={classes.rightbarInfoValue}>In a Relationship</span>
        </div>
      </div>
      <h4 className={classes.rightbatTitle}>User friends</h4>
      <div className={classes.rightbarFollowings}>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/1.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/2.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/3.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/4.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/5.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={classes.rightbarFollowing}>
          <img className={classes.rightbarFollowingImage} src="assets/person/6.jpeg" alt="" />
          <span className={classes.rightbarFollowingName}>John Carter</span>
        </div>
      </div>
    </>
    )
  }


  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
