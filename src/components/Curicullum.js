import React, { useEffect, useState } from "react"
import JSON from "../data/curicullum.json"
import CuricullumTopic from "./CuricullumTopic"
import "../styles/modal.css"
import Modal from "./Modal"
const Curicullum = ({ setpause }) => {
  const [clicked, setClicked] = useState("0")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      return setpause(true)
    } else {
      return setpause(false)
    }
  }, [isOpen])
  const handleToggle = index => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  }

  return (
    <section className="curicullum-section">
      <div className="curicullum-title">
        <h2>Best in industry curriculum</h2>
        <p>
          Best-in-class content by leading faculty and industry leaders in the
          form of videos, , live sessions and projects
        </p>
      </div>
      <div className="curicullum-icons">
        <div className="curicullum-icon">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095035/Levelup%20jobs/curicullum%20/0-09_1_hk8pip.png"
            alt=""
          />
          <p>17 Weeks Of Extensive Training</p>
        </div>

        <div className="curicullum-icon">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095035/Levelup%20jobs/curicullum%20/0-10_1_j4yqkf.png"
            alt=""
          />
          <p>5+ Case Studies and Projects </p>
        </div>

        <div className="curicullum-icon">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095035/Levelup%20jobs/curicullum%20/0-12_1_weoagu.png"
            alt=""
          />
          <p>10+ tools and skills</p>
        </div>

        <div className="curicullum-icon">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095034/Levelup%20jobs/curicullum%20/0-13_1_vpppqz.png"
            alt=""
          />
          <p>Over 20 Live Interactions</p>
        </div>
      </div>
      <div className="curicullum-container" id="my-element-start">
        <div className="curicullum-inner">
          <div className="curicullum-inner-section">
            {JSON.Curicullumdata.map((item, index) => {
              return (
                <CuricullumTopic
                  key={index}
                  item={item}
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                ></CuricullumTopic>
              )
            })}
          </div>
        </div>
        <div className="curicullum-download">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659099497/Levelup%20jobs/curicullum%20/phone_learning-01_1_1_ebgsdl.png"
            alt=""
          />
          {/* <Button
            text={"Download Course Curicullum"}
            source={
              "https://edupolis.viewpage.co/DigitalMarketing_JobsProgram_BrochureForm"
            }
          /> */}
          <main>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>
              Download Course Curriculum
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </main>
        </div>
      </div>
    </section>
  )
}

export default Curicullum
