import React from "react"
import Coursecard from "./CoachCard"
import JSON from "../data/coach.json"
import Slider from "react-slick"
import "../styles/coach2.css"

const Coaches = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
    <div className="main-container-coaches">
      <section className="coach-title">
        <h2>Our Coaches</h2>
        <p>
          Our Industry experts come from renowned industries and with years of
          experience.
        </p>
      </section>
      <div className="container-coach">
        <Slider {...settings}>
          {JSON.CoachData.map((item, index) => (
            <Coursecard key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Coaches
