import React from "react"
import {
  skillsmain,
  skillscontainer,
  skillsleft,
  skill,
  skillsright,
  
} from "../styles/skills.module.css"
const SkillsCovered = () => {
  return (
    <div className={skillsmain}>
      <div className={skillscontainer}>
        <div className={skillsleft}>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Digital Marketing</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Pay Per Click</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>YouTube Analytics</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Instagram Marketing</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Keyword Research</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Web Analytics</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Facebook Marketing</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Email Marketing</p>
          </div>{" "}
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Search Engine optimization</p>
          </div>
        </div>
        <div className={skillsright}>
          <h2>Skills Covered Across the program</h2>
          <p>
            Move your learning journey forward without putting life on hold.
            Unschool’s Job program will help you find the right career path to
            help you take a step ahead.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillsCovered
