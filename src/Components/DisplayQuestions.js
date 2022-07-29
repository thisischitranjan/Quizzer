import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Spinner , Alert } from "reactstrap";

function DisplayQuestions(props) {
  const { index, problem, active , setUserChoice , userChoice } = props;
  if (!problem) {
    return <Spinner color="primary" size="sm"></Spinner>;
  }
  const { question, correct, choices, image, desc } = problem;

  return (
    <>
      {image === "none" ? (
        ""
      ) : (
        <div className="row">
          <div className="col-12" text-center>
            <img src={image} />
          </div>
        </div>
      )}
      <div className="row" >
        <div className="col-12" text-center>
          <h4>{index + 1 + "." + question}</h4>
        </div>
      </div>
      {choices.map((option, i) => {
          return (
        <Form key={i.toString()}>
          <FormGroup check>
            <Label check>
            <Input
                type='radio'
                name={'radio' + i}
                checked={userChoice === i+1 }
                onChange={() => {
                  setUserChoice(index, i + 1);
                }}
              />{' '}
              {option}
            
            </Label>
          </FormGroup>
        </Form>
      )
      })
    }
    {    !active ?
         <Alert color="info">
         <b>Correct answer : </b> ({correct})
         <br/>
         <b>Description:</b> ({desc})
       </Alert>
       :
       ""
    }
    </>
  );
}

export default DisplayQuestions;
