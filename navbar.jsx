import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion, transform } from "framer-motion";

const Navbar = () => {
    return (
    <div className="navbar">
    {/*sidebar*/}
    <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5,}} animate={{opacity:1, scale:1,}} transition={{duration: 0.5}}>DevYuv</motion.span>
       {/*<div className="socials"></div> */}
    </div>
    </div>
    );
};

export default Navbar;