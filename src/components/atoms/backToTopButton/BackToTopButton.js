import React from "react";
import "./backToTopButton.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
function BackToTopButton() {
  return (
    <a href="#" className="back-to-top active">
      <i>
        {" "}
        <ArrowCircleUpIcon />{" "}
      </i>
    </a>
  );
}

export default BackToTopButton;
