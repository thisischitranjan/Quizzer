import React from "react";
import { useEffect, useState } from "react";
import { Progress, Button } from "reactstrap";
import DisplayQuestions from "./DisplayQuestions";
import questions from "../questions";

function randomShuffle(q) {
  for (let i = q.length - 1; i > 0; i--) {
    let ind = Math.floor(Math.random() * (i + 1));
    let temp = q[i];
    q[i] = q[ind];
    q[ind] = temp;
  }
  return q;
}
function Timer(props) {
  const { time } = props;
  return (
    <div className="container">
      <div className="text-center">{time === 0 ? " Time's Up " : time}</div>
      <Progress color="primary" value={100 - time} />
    </div>
  );
}
function Quiz(props) {
  const [time, setTime] = useState(100);
  const [active, setActive] = useState(true);
  const [problems, setProblems] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([null,null,null,null,null]);

  const finishQuiz = () => {
      setActive(false);
      let score=0;
      for (let i=0 ; i<problems.length ; i++){
          if(problems[i].correct===selected[i])
                score+=10;
            }
        alert(`Congrats! Your score is ${score} out of 50`)    
  }
  
  const setUserChoice = ( index , choice ) => {
    let t=selected;
    t[index]=choice; 
    setSelected(t)
  }
  useEffect(() => {
    if (time === 0) {
       finishQuiz();
    }
    if (active && time !== 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);

  useEffect(() => {
    setProblems(randomShuffle(questions).splice(0, 5));
  }, []);

  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-12">
          <Timer time={time} />
          <br />
          <br />
          <DisplayQuestions
            index={current}
            problem={!problems ? null : problems[current]}
            active = {active}
            userChoice={selected[current]}
            setUserChoice={setUserChoice}
          />
          {current !== 0 ? (
            <>
              <Button
                color="info"
                onClick={() => {
                  setCurrent(current - 1);
                }}
              >
                Previonus
              </Button>{" "}
            </>
          ) : (
            ""
          )}
          {current !== 4 ? (
            <>
              <Button
                color="info"
                onClick={() => {
                  setCurrent(current + 1);
                }}
              >
                Next
              </Button>{" "}
            </>
          ) : (
            ""
          )}
          {active ? (
            <>
              <Button
                color="info"
                onClick={() => {
                  finishQuiz();
                }}
              >
                Submit
              </Button>{" "}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
