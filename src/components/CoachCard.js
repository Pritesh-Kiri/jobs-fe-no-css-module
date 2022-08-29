import React from "react"
const CoachCard = ({ item }) => {
  return (
    <section className="coach-card">
      <div className="coach-img">
        <img src={item.img} alt="" />
      </div>
      <div className="coach-content">
        <div className="coach-title">
          <h3>{item.Coachname}</h3>
          <p>{item.title}</p>
        </div>
        <div className="coach-logo">
          <img src={item.logo} alt="" />
        </div>
      </div>
    </section>
  )
}

export default CoachCard
