import React, { useRef } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
const CuricullumTopic = ({ item, onToggle, active }) => {
  const contentEl = useRef()
  return (
    <article className="question">
      <div className="curicullum-topic-inner">
        <header aria-hidden="true" onClick={onToggle}>
          <div className="topic">
            <h4>{item.topic}</h4>
            <p>{`${item.weeks}  | ${item.casestudy}  | ${item.quiz}  `}</p>
          </div>
          <p className="btn">
            {active ? (
              <AiOutlineMinus fill="black" />
            ) : (
              <AiOutlinePlus fill="black" />
            )}
          </p>
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
          <p className="answer">{item.description}</p>
          <ul>
            <li
              className={item.chapter1 ? "" : "no-chapter"}
            >{` ${item.chapter1}`}</li>
            <li
              className={item.chapter2 ? "" : "no-chapter"}
            >{` ${item.chapter2}`}</li>
            <li
              className={item.chapter3 ? "" : "no-chapter"}
            >{` ${item.chapter3}`}</li>
            <li
              className={item.chapter4 ? "" : "no-chapter"}
            >{` ${item.chapter4}`}</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default CuricullumTopic
