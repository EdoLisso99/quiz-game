import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Results.css";

function Results({ answers, setAnswers }) {
  const showResult = () => {
    let count = 0;
    if (answers[0] === "Rome") count++;
    if (answers[1] === "Russia") count++;
    if (answers[2] === "Naples") count++;
    return count;
  };

  const variants = {
    hidden: {
      opacity: 0,
      fill: "rgba(17, 16, 66, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(17, 16, 66, 1)",
      transition: {
        delay: 5,
        duration: 2,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVar = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        delay: 1,
        duration: 3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="results">
      <motion.div
        className="results__title"
        variants={titleVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Results:
      </motion.div>
      <motion.div
        className="results__answers"
        variants={titleVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        You answered {showResult()} out of 3 questions correctly.
        <br />
        {showResult() === 0
          ? "Maybe next time it will be better"
          : showResult() === 1
          ? "At least one you guessed it"
          : showResult() === 2
          ? "You're almost there! Don't give up"
          : "Congratulations!"}
      </motion.div>
      <Link to="/">
        <motion.div
          className="results__homePage"
          onClick={setAnswers}
          variants={variants}
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
          Return to Homepage
        </motion.div>
      </Link>
    </div>
  );
}

export default Results;
