import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Results from "./components/Results";
import "./styles/App.css";

function App() {
  let answer = [];
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

  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
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
                answer = [...answer, e];
                console.log("Answers: ", answer);
              }}
              title={title[value]}
              possibleAnswers={possibleAnswers[value]}
            />
          </Route>
        ))}
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
