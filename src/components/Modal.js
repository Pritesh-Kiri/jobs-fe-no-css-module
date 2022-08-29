import React from "react"
import "../styles/modal.css"
import { RiCloseLine } from "react-icons/ri"

const Modal = ({ setIsOpen }) => {
  return (
    <>
      {/* <div className="darkBG" onClick={() => setIsOpen(false)} /> */}
      <div className="centered">
        <div className="modal">
          {/* <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div> */}
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <iframe
              name="leadsquared_landing_page_frame"
              src="https://edupolis.viewpage.co/DigitalMarketing_JobsProgram_BrochureForm01"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
            ></iframe>{" "}
            <script type="text/javascript">
              {" "}
              var MXLandingPageId = '5ae88a72-fc2d-11ec-9b1c-02dfd397f8fc';{" "}
            </script>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
