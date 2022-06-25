import * as React from "react";
import HomeButton from "../../atoms/HomeButton";
import { Button, Typography, Box, Modal, Fade, Backdrop } from "@mui/material";
import "./Footer.css";

function Footer() {
  const [open, setOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleShow = (e) => {
    disableScroll();
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timeout);
  };
  const handleHidden = () => {
    setShow(false);
    handleClose();
  };

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
  const handleOpen = () => {
    setOpen(true);
    disableScroll();
  };
  const handleClose = (event) => {
    event.preventDefault();

    setOpen(false);
    enableScroll();
  };

  function resetForm() {
    document.getElementById("form").reset();
  }
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
            <form
              id="form"
              action="https://formsubmit.co/coderjames7@gmail.com"
              method="POST"
              target="hiddenFrame"
              className="php-email-form"
              onSubmit={handleShow}
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="UName"
                    className="form-control"
                    placeholder="Your Name"
                    required="true"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email"
                    placeholder="Your Email"
                    required="true"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required="true"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Professional Title"
                    placeholder="Professional Title"
                    required="true"
                  />
                </div>{" "}
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Address"
                    required="true"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="msg"
                    rows="6"
                    placeholder="Type your message here"
                    required="true"
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
      <Modal
        open={show}
        onClose={handleHidden}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "20em", md: "25em" },
            backgroundColor: "#edf1f7",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            boxShadow: 23,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box onClick={handleHidden}>
            <Button
              onClick={resetForm}
              sx={{
                position: "relative",
                left: { xs: "-2.3em", md: "-2.3em" },
                top: { xs: "-2.3em", md: "-2.3em" },
                backgroundColor: "rgb(170, 55, 55)",
                border: "0",
                padding: "0.5em 1em",
                margin: "0",
                color: "#fff ",
                transition: "0.4s",
                borderRadius: "0 0 10px 0",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "lowercase",

                "&:hover": {
                  backgroundColor: "red",
                },
              }}
            >
              close
            </Button>
          </Box>
          <Box
            sx={{
              position: "relative",
              marginBottom: "1em",
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="p"
              sx={{
                fontFamily: '"Nunito", sans-serif',
                color: "#14a800",
              }}
            >
              Your details have been forwarded to our Technical support team. We
              would get back to you shortly
            </Typography>
          </Box>
        </Box>
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
      <iframe
        title="hiddenFrame"
        name="hiddenFrame"
        width="0"
        height="0"
        style={{ display: "none" }}
        frameBorder="0"
      ></iframe>
    </footer>
  );
}

export default Footer;
