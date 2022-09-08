import React from "react"
import "../styles/style.css"
import {
  powercontainer,
  powertitle,
  powerlogos,
  row1,
  row2,
} from "../styles/poweredby.module.css"
const PoweredBy = () => {
  return (
    <div>
      <div className={powercontainer}>
        <div className={powertitle}>
          <h2>We’re trusted, backed and powered by the best in the industry</h2>
        </div>
        <div className={powerlogos}>
          <div className={row1}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446131/Levelup%20jobs/Powered%20by/Accenture_copy-100_bbprx4.jpg"
              placeholder="blurred"
              alt="Linkedin"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446131/Levelup%20jobs/Powered%20by/SLX_copy_3-100_eavuhx.jpg"
              placeholder="blurred"
              alt="Linkedin"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446131/Levelup%20jobs/Powered%20by/SLX_copy_4-100_vsnuui.jpg"
              placeholder="blurred"
              alt="Yc"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446131/Levelup%20jobs/Powered%20by/SLX_copy_5-100_mcfsnv.jpg"
              placeholder="blurred"
              alt="near"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446131/Levelup%20jobs/Powered%20by/SLX_copy_2-100_ux3vi9.jpg"
              placeholder="blurred"
              alt="Vc"
            />
          </div>
          <div className={row2}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/Accenture_copy_3-100_ooq7ao.jpg"
              placeholder="blurred"
              alt="aws"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/Freshworks_copy_2-100_e1t2fv.jpg"
              placeholder="blurred"
              alt="linux"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/Freshworks_copy_3-100_jocg7l.jpg"
              placeholder="blurred"
              alt="pwc"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/SLX_copy-100_ejpu7g.jpg"
              placeholder="blurred"
              alt="football"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/Freshworks_copy-100_nyorq7.jpg"
              placeholder="blurred"
              alt="Fcgoa"
            />
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659446130/Levelup%20jobs/Powered%20by/Accenture_copy_2-100_rbnpve.jpg"
              placeholder="blurred"
              alt="Globalshapers"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
