import { MoreVert } from "@mui/icons-material";
import classes from "./post.module.css"
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({post}) => {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className={classes.post}>
        <div className={classes.postWrapper}>
            <div className={classes.postTop}>
                <div className={classes.postTopLeft}>
                    <img className={classes.postProfileImg} src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt=""/>
                    <span className={classes.postUsername}> {Users.filter(u=>u.id===post.userId)[0].username} </span>
                    <span className={classes.postDate}>{post.date}</span>
                </div>
                <div className={classes.postTopRight}>
                    <MoreVert/>
                </div>
            </div>
            <div className={classes.postCenter}>
                <span className={classes.postText}>{post?.desc}</span>
                <img className={classes.postImg} src={post.photo}alt="" />
            </div>
            <div className={classes.postBottom}>
                <div className={classes.postBottomLeft}>
                    <img  className={classes.likeIcon} src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className={classes.likeIcon} src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className={classes.postLikeCounter}>{like} people like it</span>
                </div>
                <div className={classes.postBottomRight}>
                    <span className={classes.postCommentText}>{post.comment} comments</span>
                </div>
            </div>
        </div>

            
        </div>
    );
}

export default Post;
