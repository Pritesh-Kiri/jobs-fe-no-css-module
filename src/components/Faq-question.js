import React, { useRef } from "react"
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"
const Question = ({ item, onToggle, active }) => {
  const contentEl = useRef()
  return (
    <article className="question">
      <header aria-hidden="true" onClick={onToggle}>
        <h4>{item.Que}</h4>
        <p className="btn">{active ? <AiOutlineUp /> : <AiOutlineDown />}</p>
      </header>
      <div
        ref={contentEl}
        className="answer-section"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer">{item.Ans}</p>
      </div>
    </article>
  )
}

export default Question
