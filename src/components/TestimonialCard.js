import React from "react"

const TestimonialCard = ({ item }) => {
  return (
    <section className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-img">
          <img src={item.testimonialImg} alt="profile" />
        </div>
      </div>

      <div className="testimonial-content">
        <h3>{item.testiname}</h3>
        <p>{item.testimonialDes}</p>
      </div>

      <div className="testimonial-extra">
        <div className="testimonial-company-img">
          <img src={item.company} alt="" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialCard
