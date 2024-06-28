import React, { useState } from "react";
import list from "@/Utils/faq.json";
import Question from "../../Components/Question/Question";

const FAQ = () => {
  const [openQuestionIndex, setopenQuestionIndex] = useState(null);

  return (
    <section className="faq">
      <h2>
        Preguntas <span>frecuentes</span>
      </h2>
      <div className="faq_list">
        {list.map((item, index) => (
          <Question
            key={index}
            index={index}
            data={item}
            openQuestionIndex={openQuestionIndex}
            setopenQuestionIndex={setopenQuestionIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
