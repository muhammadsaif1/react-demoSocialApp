import Post from "../post/Post";
import Share from "../share/Share";
import classes from "./feed.module.css"

const Feed = () => {
    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                <Share/>
                <Post/>
            </div>
        </div>
    );
}

export default Feed;
