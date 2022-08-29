import React, { useState } from "react"
import JSON from "../data/faq.json"
import Question from "./Faq-question"

const Faq = () => {
  const [clicked, setClicked] = useState("0")

  const handleToggle = index => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  }
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-inner">
        <div className="faq-inner-section">
          {JSON.Faqdata.map((item, index) => {
            return (
              <Question
                key={index}
                item={item}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
              ></Question>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
