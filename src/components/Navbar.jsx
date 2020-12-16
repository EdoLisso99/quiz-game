import { motion } from "framer-motion";
import React from "react";
import "../styles/Navbar.css";

function Navbar({ squareVariants }) {
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
    hover: {
      rotate: [0, -40],
      scale: 0.9,
      transition: { yoyo: Infinity, ease: "easeInOut" },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.5,
        ease: "easeInOut",
        duration: 1.7,
      },
    },
  };

  return (
    <div className="navbar">
      <div className="navbar__svgLogo">
        <motion.svg
          className="navbar__svg responsive-img"
          width="102"
          height="102"
          viewBox="0 0 102 102"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            d="M1 26.0704V76.2113L51 101L101 76.2113V26.0704L51 1L1 26.0704Z"
          />
          <motion.rect
            variants={squareVariants}
            whileHover="hover"
            x="26.6493"
            y="63.5352"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="26.6493"
            y="42.6901"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="65.6104"
            y="30.0141"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="38.6624"
            y="53.1127"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            width="8.97134"
            height="9.26294"
            transform="matrix(0.675123 0.737705 -0.82351 0.567302 62.1996 45.7887)"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            width="8.93053"
            height="9.30229"
            transform="matrix(-0.650323 0.759658 -0.840588 -0.541675 59.4612 37.0498)"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="26.6493"
            y="53.1127"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="50.6753"
            y="63.5352"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
          <motion.rect
            variants={squareVariants}
            x="38.6624"
            y="63.5352"
            width="9.74026"
            height="8.4507"
            className="navbar__rect"
          />
        </motion.svg>
      </div>
      <motion.div
        className="navbar__title"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        Quiz Game
      </motion.div>
    </div>
  );
}

export default Navbar;
