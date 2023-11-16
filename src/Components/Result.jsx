import React, { useEffect, useReducer } from "react";
import QuizReducer from "../Reducer";
import "./style.css";

export default function Result({ checkH }) {
  const [allValues, dispatch] = useReducer(QuizReducer, 0);
  const { easy, normal, hard, name } = allValues;
  //  console.log(easy,normal,hard);
  useEffect(() => {
    dispatch({ type: "separateMarks" });
  }, [checkH]);

  return (
    <>
      <div align="center">
        <h5>{`Hello ${name}, You got`}</h5>
      </div>
      <button
        id="start_withasy"
        className="btn btn-outline-warning mx-2"
        disabled
      >{`${easy}/10 in Easy`}</button>
      <button
        id="start_withasy"
        className="btn btn-outline-warning mx-2"
        disabled
      >{`${normal}/10 in Normal`}</button>
      <button
        id="start_withasy"
        className="btn btn-outline-warning mx-2"
        disabled
      >{`${hard}/10 in Hard`}</button>
      <br />
      <button
        id="start_withasy"
        className="text-center btn btn-dark mt-4"
        style={{ fontSize: "3rem" }}
        disabled
      >
        {`${name}, your TOTAL marks - ${easy + normal + hard}/30`}
      </button>
    </>
  );
}
