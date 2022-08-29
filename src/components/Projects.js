import React from "react"
import ProjectCard from "./ProjectCard"
import JSON from "../data/projects.json"
import Slider from "react-slick"
import "../styles/project.css"

const Projects = ({ pause }) => {
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
    <div className="main-container-project" id="my-element-end">
      <section className="project-title">
        <h2>Industry Projects and Case Studies</h2>
        <p>
          Learn through real-life industry projects, run live marketing
          campaigns and get mentored by top leaders across industries
        </p>
      </section>
      <div
        className={
          pause ? "container-project hide-project" : "container-project"
        }
      >
        <section className="coach-slider">
          <Slider {...settings}>
            {JSON.ProjectData.map((item, index) => (
              <ProjectCard key={index} item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default Projects
