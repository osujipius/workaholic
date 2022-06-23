import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import HomeButton from "../../atoms/HomeButton";
import "./Footer.css";

function Footer() {
  const [open, setOpen] = React.useState(false);

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }
  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
    disableScroll();
  };
  const handleClose = (event) => {
    event.preventDefault();

    setOpen(false);
    enableScroll();
  };
  return (
    <footer className="footer">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock
      >
        <Fade in={open}>
          <div className="col-lg-6" id="form-wrapper">
            <div className="col-md-12 text-center" onClick={handleClose}>
              <button id="form-close-button">close</button>
            </div>
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="UName"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Professional Title"
                    placeholder="Professional Title"
                    required=""
                  />
                </div>{" "}
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Address"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="msg"
                    rows="6"
                    placeholder="Type your message here"
                    required=""
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button id="form-button" name="btn-send">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#" onClick={handleOpen}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" onClick={handleOpen}>
                  Make a request
                </a>
              </li>
              <li>
                <a href="#" onClick={handleOpen}>
                  File a complaint
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Trending</h4>
            <ul>
              <li>
                <a href="#">Tech & IT</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Customer relations</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
