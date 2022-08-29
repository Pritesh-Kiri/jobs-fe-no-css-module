import React from "react"
import "../styles/Business.css"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/Business.css"
import Button from "./Button"

const Business = () => {
  return (
    <div className="Business-section">
      <div className="section-title">
        <h2>We’re trusted, backed and powered by the best in the industry</h2>
      </div>
      <div className="section-logo">
        <StaticImage
          src="../../static/Business/download (5).png"
          placeholder="blurred"
          alt="Linkedin"
        />
        <StaticImage
          src="../../static/Business/download (9).png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <StaticImage
          src="../../static/Business/download (1).png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <StaticImage
          src="../../static/Business/download (2).png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <StaticImage
          src="../../static/Business/Logo-PNG.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <StaticImage
          src="../../static/Business/Nasscom-logo-svg.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <StaticImage
          src="../../static/Business/download (6).png"
          placeholder="blurred"
          alt="Linkedin"
        />
      </div>
      <div className="section-content">
        <div className="section-content-left">
          <div className="section-content-left-title">
            <StaticImage
              src="../../static/Business/Unschool Logo Grey.png"
              placeholder="blurred"
              alt="RAYAN"
              width={150}
              className="section-content-left-title-img"
            />
            <span>for business</span>
          </div>
          <div className="section-content-left-content">
            <p>
              Get unlimited access to 200+ of Unschool’s top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </p>
          </div>
          <Button
            source={
              "mailto:admin@unschool.in?subject=Business with unschool &body=Create your personal brand with unschool"
            }
            text={"Get Unschool Business"}
          />
        </div>

        <div className="section-content-right">
          <StaticImage
            src="../../static/Business/rayn copy 1.png"
            placeholder="blurred"
            alt="RAYAN"
          />
        </div>
      </div>
    </div>
  )
}

export default Business
