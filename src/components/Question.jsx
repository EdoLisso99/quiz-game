import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Question.css";

function Question({ value, returnAnswer, title, possibleAnswers }) {
  const [selected, setSelected] = useState("");
  const [nextFlag, setNextFlag] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  const changeSelected = (e) => {
    setSelected(e.target.textContent);
    setNextFlag(true);
  };

  const titleVar = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        duration: 1.5,
        damping: 7,
        mass: 0.8,
        stiffness: 130,
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const answerVar = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        type: "spring",
        delay: 1.5,
        duration: 1,
        damping: 8,
        mass: 1.2,
        stiffness: 85,
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const nextVar = {
    hidden: {
      opacity: 0,
      y: "30vh",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        type: "spring",
        duration: 0.7,
        damping: 12,
        mass: 1.1,
        stiffness: 150,
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="question">
      <motion.div
        className="question__title"
        variants={titleVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {title}
      </motion.div>
      <div className="question__possibleAnswers">
        {possibleAnswers.map((answer) => (
          <motion.p
            className={`question__answer ${
              selected === answer ? "question__active" : ""
            }`}
            onClick={changeSelected}
            variants={answerVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
              scale: 1.2,
              color: "#ffff00",
            }}
          >
            {answer}
          </motion.p>
        ))}
      </div>
      <Link
        to={`/${value !== 2 ? "question" : "results"}${
          value + 1 === 1 ? "two" : value + 1 === 2 ? "three" : ""
        }`}
      >
        {nextFlag && (
          <motion.div
            className="question__next"
            variants={nextVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 8px 0px rgb(255, 255, 255)",
              transition: {
                yoyo: Infinity,
              },
            }}
            onClick={() => {
              setNextFlag(false);
              returnAnswer(selected);
            }}
          >
            Next
          </motion.div>
        )}
      </Link>
    </div>
  );
}

export default Question;
