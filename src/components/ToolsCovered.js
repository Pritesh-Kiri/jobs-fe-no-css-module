import React from "react"
import {
  toolsmain,
  toolscontainer,
  toolsleft,
  toolsright,
} from "../styles/tools.module.css"
const ToolsCovered = () => {
  return (
    <div className={toolsmain}>
      <div className={toolscontainer}>
        <div className={toolsleft}>
          <h2>Learn all the industry relevant tools</h2>
          <p>
            Get acquainted with 20+ In demand hands on digital marketing tools,
            SEO Tools, social media marketing tools, keyword research tools,
            analytics tools and many more.
          </p>
        </div>
        <div className={toolsright}>
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425110/Levelup%20jobs/Tools/Word-Press_uwpfql.jpg"
            alt=""
          />{" "}
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425110/Levelup%20jobs/Tools/Twitteranalytics_kwy2ba.jpg"
            alt=""
          />{" "}
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425109/Levelup%20jobs/Tools/Meta_u98ptn.jpg"
            alt=""
          />{" "}
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425109/Levelup%20jobs/Tools/Hootsuite_kklhuc.jpg"
            alt=""
          />{" "}
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425109/Levelup%20jobs/Tools/Google-Analytics_w1zcnu.jpg"
            alt=""
          />{" "}
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659425109/Levelup%20jobs/Tools/Hubspot_gqry7m.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/SpyFu_yc9m9n.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/SEO_woll08.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/MailChimp_taxnyj.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default ToolsCovered
