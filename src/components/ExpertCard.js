import React from "react"

const ExpertCard = ({ item }) => {
  return (
    <section className="Expert-card">
      <div className="Expert-card-top">
        <div className="Expert-img">
          <img src={item.ExpertImg} alt="profile" />
        </div>
      </div>

      <div className="Expert-content">
        <div className="Expert-name">
          <h3>{item.Expert}</h3>
          <a href={item.linkedin} target="__blank__">
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659005700/Levelup%20jobs/Experts/Layer_2_rafecg.png"
              alt=""
            />
          </a>
        </div>
        <div className="Expert-des">
          <p>{item.ExpertDes}</p>
        </div>
        <div className="Expert-extra">
          <div className="Expert-company">
            <p>Worked at</p>
            <div className="Expert-company-img">
              <img src={item.company1} alt="" />
              <img src={item.company2} alt="" />
              <img src={item.company3} alt="" />
            </div>
          </div>
          <div className="Expert-university">
            <p>Alumini of</p>
            <div className="Expert-university-img">
              <img src={item.university} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertCard
