import React, { useRef } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import {
  question,
  Uadvantagetopicinner,
  topic,
  btn,
  answersection,
  anscol,
} from "../styles/Uadvantage.module.css"
const UAdvantage = ({ item, onToggle, active }) => {
  const contentEl = useRef()
  return (
    <article className={question}>
      <div className={Uadvantagetopicinner}>
        <header aria-hidden="true" onClick={onToggle}>
          <div className={topic}>
            <h4>{item.topic}</h4>
          </div>
          <p className={btn}>
            {active ? (
              <AiOutlineMinus fill="black" />
            ) : (
              <AiOutlinePlus fill="black" />
            )}
          </p>
        </header>
        <div
          ref={contentEl}
          className={answersection}
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={anscol}>
            {/* <h5>{item.col1}</h5> */}
            <p>{item.col1pt1}</p>
            <p>{item.col1pt2}</p>
          </div>
          {/* <div className="ans-col ">
            <h5>{item.col2}</h5>
            <p>{item.col2pt1}</p>
            <p>{item.col2pt2}</p>
          </div> */}
        </div>
      </div>
    </article>
  )
}

export default UAdvantage
