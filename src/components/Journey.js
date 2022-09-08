import React from "react"
import {
  journeycontainer,
  journeytitle,
  journeycontent,
  journeyimgdesktop,
  journeyimgmobile,
} from "../styles/journey.module.css"
const Journey = () => {
  return (
    <div className={journeycontainer}>
      <div className={journeytitle}>
        <h2>Your Learning Journey</h2>
      </div>
      <div className={journeycontent}>
        <img
          className={journeyimgdesktop}
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659776787/Levelup%20jobs/Journey/infographic_CC_-01_2_jy8li5.png"
          alt=""
        />
        <img
          className={journeyimgmobile}
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659523086/Levelup%20jobs/Journey/Asset_2_4x_1_e3cs52.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Journey
