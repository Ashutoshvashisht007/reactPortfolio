import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ashutosh Anand Sharma
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100006980552355">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/ashutosh_vashisht_007/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://leetcode.com/Ashutosh_Anand_Sharma/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://github.com/Ashutoshvashisht007">
            <img style={{backgroundColor:"white", borderRadius:"50%"}} src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
