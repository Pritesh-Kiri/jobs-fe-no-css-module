import React from "react"
import {
  testimonialcard,
  testimonialcardtop,
  testimonialimg,
  testimonialcontent,
  testimonialextra,
} from "../styles/testimonial.module.css"
const TestimonialCard = ({ item }) => {
  return (
    <section className={testimonialcard}>
      <div className={testimonialcardtop}>
        <div className={testimonialimg}>
          <img src={item.testimonialImg} alt="profile" />
        </div>
      </div>

      <div className={testimonialcontent}>
        <h3>{item.testiname}</h3>
        <p>{item.testimonialDes}</p>
      </div>

      <div className={testimonialextra}>
        <div className="testimonial-company-img">
          <img src={item.company} alt="" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialCard
