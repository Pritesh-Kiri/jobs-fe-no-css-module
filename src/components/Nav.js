import React from "react"
import Button from "./Button"
import "../styles/Nav.css"

const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <a href="#" class="nav-logo">
            <img
              src="https://www.unschool.in/static/Unschool%20Logo%20Horizontal%20White%20(1)-a4913f0c391a347aa53acfa994243cb4.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <ul id="nav">
            <li>
              <a href="#" id="">
                Intenships
              </a>
            </li>
            <li>
              <a href="#" id="levels">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" id="roles">
                Blogs
              </a>
            </li>

            <li>
              <Button
                text={"Sign in"}
                source={"https://www.unschool.in/"}
                id={"nav-btn"}
              />
            </li>
          </ul>
        </div>
        <div class="menu" id="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}

export default Nav
