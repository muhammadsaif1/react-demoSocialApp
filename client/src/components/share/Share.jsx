import { PermMedia,Label,Room,EmojiEmotions, Cancel } from "@mui/icons-material";
import classes from "./share.module.css"
import { useContext, useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";



const Share = () => {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FLODER;
    const desc = useRef();
    const [file,setFile] = useState(null);


    const submitHandler=async (e)=>{
        e.preventDefault();
        const newPost={
            userId: user._id,
            desc:desc.current.value,

        }
        if (file) {
            const data = new FormData();
            const fileName =Date.now() +file.name;
            data.append("file",file)
            data.append("name",fileName)
            newPost.img = fileName
            try {
                await axios.post("/upload",data);
            } catch (err) {
                console.log(err)
            }
            
        }
        try {
           await axios.post("/posts",newPost )
           window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={classes.share}>
        <div className={classes.shareWrapper}>
            <div className={classes.shareTop}>
                <img className={classes.shareProfileImage} src={user.profilePicture ? PF+user.profilePicture : PF+"/person/noAvatar.png"} alt=""/>
                <input ref={desc} className={classes.shareInput} placeholder={"What's in Your mind"+user.username+"?"}/>
            </div>
            <hr className={classes.shareHR}/>
            {file && (
                <div className={classes.shareImgContainer}>
                <img className={classes.shareImg} src={URL.createObjectURL(file)} alt=""/>
                <Cancel className={classes.shareCancelImg} onClick={()=>setFile(null)}/>
                </div>
            ) }
            <form className={classes.shareBottom} onSubmit={submitHandler}>
            <div className={classes.shareOptions}>
                <label htmlFor="file" className={classes.shareOption}>
                <PermMedia htmlColor="tomato" className={classes.shareIcon}/>
                    <span className={classes.shareOptionText}>Photo or video</span>
                    <input style={{display:"none"}} type="file" id="file" accept="png,jpeg,jpg" onChange={(e)=>setFile(e.target.files[0])}></input>
                </label>
                <div className={classes.shareOption}>
                <Label htmlColor="blue" className={classes.shareIcon}/>
                    <span className={classes.shareOptionText}>Tag</span>
                </div>
                <div className={classes.shareOption}>
                <Room htmlColor="green" className={classes.shareIcon}/>
                    <span className={classes.shareOptionText}>Location</span>
                </div>
                <div className={classes.shareOption}>
                <EmojiEmotions htmlColor="goldenrod" className={classes.shareIcon}/>
                    <span className={classes.shareOptionText}>Feelings</span>
                </div>
                </div>
                <button className={classes.shareButton} type="submit">Share</button>
            </form>
        </div>
            
        </div>
    );
}

export default Share;
