import React from "react"
const CourseCard = ({ item }) => {
  return (
    <section className="course-card">
      <div className="course-img">
        <img src={item.img} alt="" />
      </div>
      <div className="course-content">
        <h3>{item.title}</h3>
        <p>{item.Coachname}</p>
      </div>
    </section>
  )
}

export default CourseCard
