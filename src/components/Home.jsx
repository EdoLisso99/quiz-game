import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ allVariants }) {
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
