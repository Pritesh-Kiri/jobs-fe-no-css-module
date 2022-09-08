import React, { useState } from "react"
import JSON from "../data/UAdvantage.json"
import UAdvantage from "./UAdvantage"
import {
  Uadvantagesection,
  Uadvantagetitle,
  numbercontainer,
  numberinner,
  numberitem,
  Uadvantagecontainer,
  Uadvantageinner,
  Uadvantageinnersection
} from "../styles/Uadvantage.module.css"
const UnschoolAdvantage = () => {
  const [clicked, setClicked] = useState("0")

  const handleToggle = index => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  }
  return (
    <section className={Uadvantagesection}>
      <div className={Uadvantagetitle}>
        <h2>The Unschool Advantage</h2>
        {/* <p>
          Best-in-class content by leading faculty and industry leaders in the
          form of videos, , live sessions and projects
        </p> */}
      </div>
      <div className={numbercontainer}>
        <div className={numberinner}>
          <div className={numberitem}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095353/Levelup%20jobs/Uadvantage/0-11_1_lzgclx.png"
              alt=""
            />
            <h4>200,000+</h4>
            <p>Learners</p>
          </div>

          <div className={numberitem}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095353/Levelup%20jobs/Uadvantage/0-14_1_xkvytm.png"
              alt=""
            />

            <h4>110+</h4>
            <p>Hiring Partners</p>
          </div>

          <div className={numberitem}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095353/Levelup%20jobs/Uadvantage/0-17_1_r8ooat.png"
              alt=""
            />

            <h4>500000</h4>
            <p>Enrollments</p>
          </div>

          <div className={numberitem}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095353/Levelup%20jobs/Uadvantage/0-15_1_wsb9d3.png"
              alt=""
            />

            <h4>100+</h4>
            <p>Industry Experts</p>
          </div>

          <div className={numberitem}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659095353/Levelup%20jobs/Uadvantage/0-18_1_qqfsdg.png"
              alt=""
            />

            <h4>100%</h4>
            <p>Placements</p>
          </div>
        </div>
      </div>
      <div className={Uadvantagecontainer}>
        <div className={Uadvantageinner}>
          <div className={Uadvantageinnersection}>
            {JSON.Uadvantagedata.map((item, index) => {
              return (
                <UAdvantage
                  key={index}
                  item={item}
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                ></UAdvantage>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnschoolAdvantage
