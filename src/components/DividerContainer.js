import React from "react"
import ImageDividerone from "./ImageDividerone"
import JSON from "../data/ImageDivider.json"
import Slider from "react-slick"
import "../styles/imagedivider.css"

const DividerContainer = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  }

  return (
    <div className="container-divider">
      <Slider {...settings}>
        {JSON.CoachData.map((item, index) => (
          <ImageDividerone key={index} item={item} />
        ))}
      </Slider>
    </div>
  )
}

export default DividerContainer
