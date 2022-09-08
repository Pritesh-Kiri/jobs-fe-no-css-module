import React from "react"
import {
  projectcard,
  projectcardinner,
  projectcardproject,
} from "../styles/project.module.css"
const ProjectCard = ({ item }) => {
  return (
    <section className={projectcard}>
      <div className={projectcardinner}>
        <div className={projectcardproject}>
          <h3>{item.title1}</h3>
          <img src={item.logo1} alt="" />
          <p>{item.des1}</p>
        </div>
        <div className={projectcardproject}>
          <h3>{item.title2}</h3>
          <img src={item.logo2} alt="" />
          <p>{item.des2}</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
