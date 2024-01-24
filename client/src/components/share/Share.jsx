import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material";
import classes from "./share.module.css"

const Share = () => {
    return (
        <div className={classes.share}>
        <div className={classes.shareWrapper}>
            <div className={classes.shareTop}>
                <img className={classes.shareProfileImage} src="/assets/person/1.jpeg" alt=""/>
                <input className={classes.shareInput} placeholder="What's in your mind"/>
            </div>
            <hr className={classes.shareHR}/>
            <div className={classes.shareBottom}>
            <div className={classes.shareOptions}>
                <div className={classes.shareOption}>
                <PermMedia htmlColor="tomato" className={classes.shareIcon}/>
                    <span className={classes.shareOptionText}>Photo or video</span>
                </div>
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
                <button className={classes.shareButton}>Share</button>
            </div>
        </div>
            
        </div>
    );
}

export default Share;
