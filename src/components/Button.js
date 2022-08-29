import React from "react"

const Button = ({ text, source, id }) => {
  return (
    <div className="button-container">
      <a href={`${source}`} target="__blank__">
        <div className="button">
          <p id={id}>{text}</p>
        </div>
      </a>
    </div>
  )
}

export default Button
