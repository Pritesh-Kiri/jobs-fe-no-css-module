import React, { useEffect, useState } from "react"
// import Button from "./Button"
// import videothumbanil from "../../static/video thumbail.png"
import "../styles/modal.css"
import ApplyModal from "./ApplyModal"
const Hero = ({ setpause }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      return setpause(true)
    } else {
      return setpause(false)
    }
  }, [isOpen])

  return (
    <div className="hero-container">
      <div className="hero-top">
        {" "}
        <div className="hero-content">
          <div className="hero-title">
            <h2>Advanced Certificate in Digital Marketing and Communication</h2>
            <p>
              Become a Digital Marketing expert by specialising in Social Media
              and Content Marketing, Branding, Marketing Analytics and Public
              Relations. Start your Digital Marketing journey with Unschool
              today.
            </p>
            {/* <div className="hero-review">
            <p>Revivew</p>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1657608767/kickstarter/Group_26590_4_bwnauh.png"
              alt=""
            />
          </div> */}
          </div>
          <div className="hero-usps">
            <div className="hero-usp-icon">
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659022127/Levelup%20jobs/Hero/download_ulxvjz.svg"
                alt=""
              />
              <p>90+hrs Applied Learning </p>
            </div>

            <div className="hero-usp-icon">
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659022131/Levelup%20jobs/Hero/download_7_ugj8f9.png"
                alt=""
              />
              <p>Advanced </p>
            </div>

            <div className="hero-usp-icon">
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659022132/Levelup%20jobs/Hero/download_8_byzqnm.png"
                alt=""
              />
              <p>5107+ learners </p>
            </div>

            <div className="hero-usp-icon">
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659022133/Levelup%20jobs/Hero/download_10_vuvsko.png"
                alt=""
              />
              <p>Language: English</p>
            </div>
            <div className="hero-usp-icon">
              <img
                src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659022136/Levelup%20jobs/Hero/download_11_pzokgv.png"
                alt=""
              />
              <p>43 chapters, 65 hours</p>
            </div>
          </div>
          <div className="hero-image-mobile">
            {/* <img src={videothumbanil} alt="thumbanil" /> */}
            <div>
              <iframe
                src="https://player.vimeo.com/video/736491793?h=e311b4a50a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="promo v1 fnl"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div className="hero-apply">
            {/* <Button
              text={"Apply now"}
              source={
                "https://edupolis.viewpage.co/DigitalMarketing_JobsProgram_ApplyNow"
              }

    
            /> */}
            <main>
              <button
                className="primaryBtn applyBtn"
                onClick={() => setIsOpen(true)}
              >
                Apply Now
              </button>
              {isOpen && <ApplyModal setIsOpen={setIsOpen} />}
            </main>
            {/* <p className="hero-cohort">Next Cohort: 5th September 2022</p> */}
          </div>
        </div>
        <div className="hero-image">
          {/* <img src={videothumbanil} alt="thumbanil" /> */}
          <div>
            <iframe
              src="https://player.vimeo.com/video/736491793?h=e311b4a50a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="promo v1 fnl"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-container">
          <div className="hero-bottom-info">
            <p>Next Cohort Starts 5th Sep, 2022</p>
            <span>Limited seats only available</span>
          </div>
          <div className="hero-bottom-info">
            <p>Program Duration: 6 Months</p>
            <span>Approx. 8-10 hours/week</span>
          </div>
          <div className="hero-bottom-info">
            <p>Job Guarantee after Completion</p>
            <span>3 months Career Assistance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
