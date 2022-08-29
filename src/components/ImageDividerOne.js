import React from "react"
import Button from "../components/Button"

const ImageDividerone = ({ item }) => {
  return (
    <div className="ImageOneContainer">
      <div className={item.background}>
        <div className="ImageDividerInner">
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
          <Button text={"Learn from us"} />
        </div>
      </div>
    </div>
  )
}

export default ImageDividerone
