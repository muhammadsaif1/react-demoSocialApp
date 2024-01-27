import classes from "./profile.module.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FLODER;
    const [user,setUser] = useState({});
    const username = useParams().username;
   



    useEffect(()=>{
        const fetchUser = async () =>{
            const res = await  axios.get(`/users?username=${username}`)
            setUser(res.data)
        };
            fetchUser();
    },[username]);

    return (
        <>
        <Topbar/>
        <div className={classes.profile}>
        <Sidebar/>
        <div  className={classes.profileRight}>
        <div className={classes.profileRightTop}>
        <div className={classes.profileCover}>
            <img className={classes.profileCoverImg} src={user.coverPicture ? PF+user.coverPicture : PF+"person/noCover.png"} alt="" />
            <img className={classes.profileUserImg} src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
        </div>
        <div className={classes.profileInfo}>
            <h4 className={classes.profileInfoName}>{user.username}</h4>
            <span className={classes.profileInfoDescr}>{user.desc}</span>
        </div>
        </div>
        <div className={classes.profileRightBottom}>
            <Feed username={username}/>
            <Rightbar user={user}/>
        </div>
        </div>
        </div>
        
    </>
    );
}

export default Profile;
