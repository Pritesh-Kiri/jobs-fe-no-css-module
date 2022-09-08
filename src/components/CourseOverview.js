import React from "react"
import "../styles/style.css"
import {
  courseoverviewcontainer,
  COtitle,
  COcontent,
  COcard,
  COcardicon,
  COcardcontent,
} from "../styles/courseoverview.module.css"
const CourseOverview = () => {
  return (
    <div>
      <div className={courseoverviewcontainer}>
        <div className={COtitle}>
          <h2>Course Overview</h2>
        </div>
        <div className={COcontent}>
          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-01_1_rlvedg.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Industry Certification</h4>
              <p>
                Multiple Certification Opportunity From Unschool, Leadsqaured,
                Hubspot etc.
              </p>
            </div>
          </div>

          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-02_1_yh3ra4.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Worldclass Experts</h4>
              <p>
                Access to Industry Experts and Teaching Assistant Through the
                Program
              </p>
            </div>
          </div>

          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-03_1_dzvzek.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Live Interactions</h4>
              <p>
                Fortnightly Immersive Guest Lectures with Industry Leaders to
                Rekindle Your Mind
              </p>
            </div>
          </div>

          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-04_1_rxkk37.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Hands on Training</h4>
              <p>10+ Projects and Relevant Case Studies Through the Program</p>
            </div>
          </div>

          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-05_1_sga8ed.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Immersive Learning</h4>
              <p>
                Module Based Quizzess and Assessment to Test Your Knowledge At
                Every Stage
              </p>
            </div>
          </div>
          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-06_1_unstiq.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Doubt Solving</h4>
              <p>
                Weekly Live Sessions of upto 3 hours with Live QnA every week
                for 60 minutes
              </p>
            </div>
          </div>
          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-07_1_xmwzlw.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Video Content</h4>
              <p>Self Paced Learning with over 30 hours of Video Content</p>
            </div>
          </div>
          <div className={COcard}>
            <div className={COcardicon}>
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659093859/Levelup%20jobs/Course%20overview/0-08_1_xxpxww.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={COcardcontent}>
              <h4>Job Assistance</h4>
              <p>Mock interviews and Guidance in Resume Preparation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseOverview
