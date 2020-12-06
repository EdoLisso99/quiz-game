import { motion } from "framer-motion";
import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const svgVariants = {
    hidden: {
      rotate: 170,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="navbar">
      <div className="navbar__svgLogo">
        <motion.svg
          className="navbar__svg responsive-img"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          viewBox="-10 -10 100 100"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            d="M38.4167 34.8589C17.706 34.8174 1 1 1 1V75.8499C1 75.8499 9.39469 58.9372 19.75 58.958C30.0593 58.9786 38.4167 75.7748 38.4167 75.7748C38.4167 75.7748 46.7742 59.0197 57.0833 58.958C67.5305 58.8954 76 76 76 76V1C76 1 59.1733 34.9004 38.4167 34.8589Z"
          />
        </motion.svg>
      </div>
      <div className="navbar__title">Quiz Game</div>
    </div>
  );
}

export default Navbar;
