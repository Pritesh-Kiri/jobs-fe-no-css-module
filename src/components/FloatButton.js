import React, { useEffect, useState } from "react"
import ApplyModal from "./ApplyModal"

const FloatButton = ({ pause, setpause }) => {
  const [show, setshow] = useState(false)
  const [mshow, msetshow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const isBrowser = typeof window !== "undefined" && window
  useEffect(() => {
    if (isOpen) {
      return setpause(true)
    } else {
      return setpause(false)
    }
  }, [isOpen])
  const scrolling = () => {
    if (isBrowser.scrollY > 1370 && isBrowser.screen.width > 1200) {
      // console.log("i am above 1200")
      return setshow(true)
    } else if (isBrowser.scrollY > 1000 && isBrowser.screen.width < 776) {
      // console.log("i am below 776")

      return msetshow(true)
    } else {
      setshow(false)
      msetshow(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrolling)
  }

  return (
    <div
      className={
        mshow ? "float-button-container show" : "float-button-container"
      }
    >
      <div className={show || mshow ? "float-btn show" : "float-btn"}>
        <div
          className={pause ? "hide-float" : ""}
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Apply now
        </div>
      </div>
      {isOpen && <ApplyModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default FloatButton
