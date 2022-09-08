import React from "react"
import TestimonialCard from "./TestimonialCard"
import JSON from "../data/testimonials.json"
import Slider from "react-slick"
import "../styles/Testimonial.css"
import {
  maincontainertestimonial,
  testimonialtitle,
  containertestimonial,
} from "../styles/testimonial.module.css"
const Testimonials = () => {
  const settings = {
    dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,

    // sdgdfsgefdsgsd

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className={maincontainertestimonial}>
      <section className={testimonialtitle}>
        <h2>Hear from our learners</h2>
        <p>
          Our Industry testimonials come from renowned industries and with years
          of experience.{" "}
        </p>
      </section>
      <div className={containertestimonial}>
        <section>
          <Slider {...settings}>
            {JSON.TestimonialData.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
