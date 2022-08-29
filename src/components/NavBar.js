import React from "react"
import UNSLogo from "../../static/unschool logo.png"
import CrossIcon from "../images/nav-close-button.svg"
import CartIcon from "../../static/cart.png"
// import externalLinkIcon from "../images/Link.svg"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
      mobileDropdownOpen: false,
      joinCommunityActiveHovered: false,
    }
    this.isSSR = typeof window === "undefined"
    this.setWrapperRef = this.setWrapperRef.bind(this)
    // this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClick = e => {
    if (this.node && this.node.contains(e.target)) {
    } else {
      this.setState({ active: false, navBarActiveClass: "" })
      enableBodyScroll(this.node)
      document.querySelector("html").classList.remove("body-scrolling-disabled")
    }
  }

  componentWillMount() {
    !this.isSSR &&
      document.addEventListener("mousedown", this.handleClick, false)
    !this.isSSR &&
      document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    !this.isSSR &&
      document.removeEventListener("mousedown", this.handleClick, false)
    clearAllBodyScrollLocks()
    !this.isSSR &&
      document.querySelector("html").classList.remove("body-scrolling-disabled")
    !this.isSSR &&
      document.removeEventListener("mousedown", this.handleClickOutside)
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        if (this.state.active) {
          this.setState({
            navBarActiveClass: "mobile-visible",
          })
          disableBodyScroll(this.node)
          document
            .querySelector("html")
            .classList.add("body-scrolling-disabled")
        } else {
          this.setState({
            navBarActiveClass: "",
          })
          enableBodyScroll(this.node)
          clearAllBodyScrollLocks()
          document
            .querySelector("html")
            .classList.remove("body-scrolling-disabled")
        }
      }
    )
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     this.setState({ showCourseDropdown: false })
  //   }
  // }

  render() {
    const { transparent } = this.props
    return (
      <div
        id="header"
        className={`header-section ${transparent ? "transparent-navbar" : ""}`}
        ref={node => (this.node = node)}
      >
        <nav className="main-navbar-desktop">
          <div className="nav-lhs">
            <a className="nav-brand-logo" href="/">
              <img src={UNSLogo} alt="Unschool.in" />
            </a>
            {/* <div className="browse-item" ref={this.setWrapperRef}>
              <div
                className="browse-dropdown-btn"
                onClick={() => {
                  this.toggleCourseDropdown()
                }}
              >
                Browse
                <span
                  className={`browse-chevron bottom ${
                    showCourseDropdown ? "browse-chevron-rotate" : ""
                  }`}
                />
              </div>
            </div> */}
          </div>
          <div className="nav-rhs">
            <div className="nav-item">
              <a
                className="nav-link"
                href="https://learn.unschool.in/"
                target="_blank"
                rel="noreferrer"
              >
                Internships
              </a>
            </div>
            <div className="nav-item">
              <a
                className="nav-link "
                href="https://community.unschool.in/signup"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </div>
            <div className="nav-item">
              <a
                className="nav-link join-link"
                href="https://community.unschool.in/signup"
                target="_blank"
                rel="noreferrer"
              >
                <img src={CartIcon} />
              </a>
            </div>
            <form className="form-inline my-2 my-lg-0" action="#">
              <button
                className="btn sign-in-btn my-2 my-sm-0"
                type="submit"
                onClick={() =>
                  window.open("https://www.unschool.in/checkout/", "_blank")
                }
              >
                SIGN IN
              </button>
            </form>
          </div>
        </nav>

        <nav className="main-navbar-mobile">
          <button
            className="hamburger-btn"
            type={"button"}
            onClick={this.toggleHamburger}
          >
            <span className="hamburger-icon-small-line" />
            <span className="hamburger-icon-big-line" />
            <span className="hamburger-icon-small-line" />
          </button>
          <a className="nav-brand-logo" href="/">
            <img src={UNSLogo} alt="Unschool.in" />
          </a>
          {this.state.active && (
            <div className="mobile-nav-popup">
              <img
                className="menu-close-btn"
                src={CrossIcon}
                alt={"Close Icon"}
                onClick={() => {
                  this.setState({ active: false, navBarActiveClass: "" })
                  enableBodyScroll(this.node)
                  clearAllBodyScrollLocks()
                  document
                    .querySelector("html")
                    .classList.remove("body-scrolling-disabled")
                }}
              />
              <div className="mobile-nav-menu">
                <div className="menu-header">
                  <img src={UNSLogo} alt="Unschool.in" />
                  {/* <form className="form-inline my-2 my-lg-0" action="#">
                    <button
                      className="btn sign-in-btn my-2 my-sm-0"
                      type="submit"
                      onClick={() =>
                        window.open(
                          "https://learn.unschool.in/learn/account/signin",
                          "_blank"
                        )
                      }
                    >
                      SIGN IN
                    </button>
                  </form> */}

                  <a
                    className="nav-link join-link"
                    href="https://community.unschool.in/signup"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={CartIcon} />
                  </a>
                </div>
                {/* <div className="menu-body">
                  <p className="categories-title">COURSE CATEGORIES</p>
                </div> */}
                <div className="menu-footer">
                  <div className="nav-item">
                    <a
                      className="nav-link"
                      href="https://learn.unschool.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Internships
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link "
                      href="https://community.unschool.in/signup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blogs
                    </a>
                  </div>
                  <div className="nav-item menu-header">
                    <form className="form-inline my-2 my-lg-0" action="#">
                      <button
                        className="btn sign-in-btn my-2 my-sm-0"
                        type="submit"
                        onClick={() =>
                          window.open(
                            "https://www.unschool.in/checkout/",
                            "_blank"
                          )
                        }
                      >
                        SIGN IN
                      </button>
                    </form>
                  </div>
                  {/* <div className="nav-item">
                    <a
                      className="nav-link join-link"
                      href="https://community.unschool.in/signup"
                      target="_blank"
                    >
                      <img src={CartIcon} />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

export default Navbar
