import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ allVariants }) {
  const ballVar = {
    hidden: {
      opacity: 0,
      fill: "rgba(17, 16, 66, 0)",
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      fill: "rgba(17, 16, 66, 1)",
      x: [30, -30],
      y: [0, -40],
      transition: {
        delay: 4.2,
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
        },
      },
    },
  };

  return (
    <div className="home">
      <motion.div
        className="home__welcome"
        variants={allVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Welcome to Quiz Game!
      </motion.div>
      <motion.div
        className="home__ball"
        variants={ballVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <Link to="/questionone">
        <motion.p
          className="home__startBtn"
          variants={allVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px 0px rgb(255, 255, 255)",
            transition: {
              yoyo: Infinity,
            },
          }}
        >
          Start Your Game!
        </motion.p>
      </Link>
    </div>
  );
}

export default Home;
