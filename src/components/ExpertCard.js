import React from "react"
import {
  Expertcard,
  Expertcardtop,
  Expertimg,
  Expertcontent,
  Expertname,
  Expertdes,
  Expertextra,
  Expertcompany,
  Expertcompanyimg,
  Expertuniversity,
  Expertuniversityimg,
} from "../styles/expert.module.css"
const ExpertCard = ({ item }) => {
  return (
    <section className={Expertcard}>
      <div className={Expertcardtop}>
        <div className={Expertimg}>
          <img src={item.ExpertImg} alt="profile" />
        </div>
      </div>

      <div className={Expertcontent}>
        <div className={Expertname}>
          <h3>{item.Expert}</h3>
          <a href={item.linkedin} target="__blank__">
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659005700/Levelup%20jobs/Experts/Layer_2_rafecg.png"
              alt=""
            />
          </a>
        </div>
        <div className={Expertdes}>
          <p>{item.ExpertDes}</p>
        </div>
        <div className={Expertextra}>
          <div className={Expertcompany}>
            <p>Worked at</p>
            <div className={Expertcompanyimg}>
              <img src={item.company1} alt="Expertcompanyimg" />
              <img src={item.company2} alt="Expertcompanyimg" />
              <img src={item.company3} alt="Expertcompanyimg" />
            </div>
          </div>
          <div className={Expertuniversity}>
            <p>Alumini of</p>
            <div className={Expertuniversityimg}>
              <img src={item.university} alt="Expertuniversityimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertCard
