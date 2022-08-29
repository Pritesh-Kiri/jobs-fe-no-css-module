import React from "react"
import ExpertCard from "./ExpertCard"
import JSON from "../data/Experts.json"
import Slider from "react-slick"
import "../styles/Expert.css"

const ExpertSection = () => {
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
    <div className="main-container-Expert">
      <section className="Expert-title">
        <h2>Learn Directly From Experts</h2>
        <p>
          Network and learn under the guidance of best digital marketing
          experts.
        </p>
      </section>
      <div className="container-Expert">
        <section className="coach-slider">
          <Slider {...settings}>
            {JSON.ExpertData.map((item, index) => (
              <ExpertCard key={index} item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default ExpertSection
