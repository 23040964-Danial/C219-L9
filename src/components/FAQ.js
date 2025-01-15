import { useState } from "react";

const faqData = [
  { question: "What are the entry requirements?", answer: "Entry requirements vary by diploma. Please check our website for specific requirements." },
  { question: "How long are the diploma programs?", answer: "Most diploma programs at Republic Polytechnic are 3 years long." },
  { question: "Are internships available?", answer: "Yes, internships are a key component of our diploma programs." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <h3 onClick={() => toggleQuestion(index)} className="faq-question">
              {item.question}
            </h3>
            {activeIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}