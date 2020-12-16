import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Results from "./components/Results";
import "./styles/App.css";

function App() {
  const [answer, setAnswer] = useState([]);
  const location = useLocation();
  const arr = [0, 1, 2];
  const title = [
    "Question one:  What is the capital of Italy?",
    "Question two:  What's the biggest country in the world?",
    "Question three: Where do you eat the best pizza in the world?",
  ];
  const possibleAnswers = [
    ["Paris", "Berlin", "London", "Rome", "Madrid"],
    ["Canada", "Russia", "USA", "Alaska", "Vatican City"],
    ["Milan", "Florence", "Rome", "Palermo", "Naples"],
  ];

  const variants = {
    hidden: {
      opacity: 0,
      fill: "rgba(17, 16, 66, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(17, 16, 66, 1)",
      transition: {
        delay: 1.5,
        duration: 1.7,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar squareVariants={variants} />
      </div>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home allVariants={variants} />
          </Route>
          {arr.map((value) => (
            <Route
              path={`/question${
                value === 0 ? "one" : value === 1 ? "two" : "three"
              }`}
            >
              <Question
                value={value}
                returnAnswer={(e) => {
                  setAnswer([...answer, e]);
                  console.log("InnerAnswers: ", answer);
                }}
                title={title[value]}
                possibleAnswers={possibleAnswers[value]}
              />
            </Route>
          ))}
          <Route path="/results">
            <Results
              answers={answer}
              setAnswers={() => {
                setAnswer([]);
              }}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
