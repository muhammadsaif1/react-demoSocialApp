import Post from "../post/Post";
import Share from "../share/Share";
import classes from "./feed.module.css"
import { Posts } from "../../dummyData";

const Feed = () => {
    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                <Share/>
                {Posts.map(p=>(
                <Post key={p.id} post={p}/>
                ))}


            </div>
        </div>
    );
}

export default Feed;
