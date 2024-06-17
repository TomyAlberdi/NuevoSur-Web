import React from "react";

const Question = ({ data, index, openQuestionIndex, setopenQuestionIndex }) => {
  return (
    <article
      className={"question" + (index === openQuestionIndex ? " open" : "")}
      onClick={() => {
        openQuestionIndex === index
          ? setopenQuestionIndex(null)
          : setopenQuestionIndex(index);
      }}
    >
      <section className="question">
        {data.question}
        <svg viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 1L5.5 5L9.5 1"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </section>
      <section className="answer">{data.answer}</section>
    </article>
  );
};

export default Question;
