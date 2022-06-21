import React from "react";
import "./homeBlogCard.css";

function HomeBlogCard({ date, title, src, link, style }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="col-lg-4 col-md-6 col-sm-6"
      id="blogLink"
    >
      <div className="post-box" style={style}>
        <div className="post-img" style={{ height: "300px" }}>
          <img
            style={{ objectFit: "cover" }}
            src={src}
            className="img-fluid"
            alt=""
          />
        </div>
        <span className="post-date">{date}</span>
        <h3 className="post-title">{title}</h3>
      </div>
    </a>
  );
}

export default HomeBlogCard;
