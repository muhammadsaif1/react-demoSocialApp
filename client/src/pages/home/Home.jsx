import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed"
import classes from "./Home.module.css"
const Home = () => {
    return (
        <>
            <Topbar/>
            <div className={classes.homeContainer}>
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
            
        </>
    );
}

export default Home;
