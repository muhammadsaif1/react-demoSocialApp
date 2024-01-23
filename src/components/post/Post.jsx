import { MoreVert } from "@mui/icons-material";
import classes from "./post.module.css"

const Post = () => {
    return (
        <div className={classes.post}>
        <div className={classes.postWrapper}>
            <div className={classes.postTop}>
                <div className={classes.postTopLeft}>
                    <img className={classes.postProfileImg} src="/assets/person/1.jpeg" alt=""/>
                    <span className={classes.postUsername}>Saif Shabir</span>
                    <span className={classes.postDate}>5 mins ago</span>
                </div>
                <div className={classes.postTopRight}>
                    <MoreVert/>
                </div>
            </div>
            <div className={classes.postCenter}>
                <span className={classes.postText}>Hey! Its my first post</span>
                <img className={classes.postImg} src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className={classes.postBottom}>
                <div className={classes.postBottomLeft}>
                    <img  className={classes.likeIcon} src="/assets/like.png" alt="" />
                    <img className={classes.likeIcon} src="/assets/heart.png" alt="" />
                    <span className={classes.postLikeCounter}>31 people like it</span>
                </div>
                <div className={classes.postBottomRight}>
                    <span className={classes.postCommentText}>9 comments</span>
                </div>
            </div>
        </div>

            
        </div>
    );
}

export default Post;
