import React from "react"

const ProjectCard = ({ item }) => {
  return (
    <section className="project-card">
      <div className="project-card-inner">
        <div className="project-card-project">
          <h3>{item.title1}</h3>
          <img src={item.logo1} alt="" />
          <p>{item.des1}</p>
        </div>
        <div className="project-card-project">
          <h3>{item.title2}</h3>
          <img src={item.logo2} alt="" />
          <p>{item.des2}</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
