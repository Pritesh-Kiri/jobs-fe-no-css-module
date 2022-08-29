import React from "react"
// import Courses from "../components/Courses"
import "../styles/style.css"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import Hero from "../components/Hero"
import PoweredBy from "../components/PoweredBy"
import CourseOverview from "../components/CourseOverview"
import SkillsCovered from "../components/SkillsCovered"
import ToolsCovered from "../components/ToolsCovered"
import Hiring from "../components/Hiring"
import ExpertSection from "../components/ExpertSection"
import Curicullum from "../components/Curicullum"
import Projects from "../components/Projects"
import Journey from "../components/Journey"
import Testimonials from "../components/Testimonials"
import UnschoolAdvantage from "../components/UnschoolAdvantage"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import FloatButton from "../components/FloatButton"

import Navbar from "../components/NavBar"
import Helmet from "react-helmet"
import { useState } from "react"
export default function Home() {
  const [pause, setpause] = useState(false)
  return (
    <div>
      <Helmet>
        <body
          className={pause ? "pause" : ""}
          title="Levelup Jobs | Unschool"
        />
      </Helmet>
      <FloatButton pause={pause} setpause={setpause} />
      <Navbar />
      <Hero setpause={setpause} />
      <PoweredBy />
      <CourseOverview />
      <ToolsCovered />
      <SkillsCovered />
      <Hiring />
      <ExpertSection />
      <Curicullum setpause={setpause} />
      <Projects pause={pause} />
      <Journey />
      <Testimonials />
      <UnschoolAdvantage />
      <Faq />
      <Footer />
      
    </div>
  )
}
