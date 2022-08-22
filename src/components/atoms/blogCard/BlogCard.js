import React from "react";
import "./blogCard.css";

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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quos possimus itaque consectetur cum repudiandae perspiciatis totam.
          Ullam nulla modi recusandae tenetur cupiditate corrupti sed, harum
          rerum magnam ipsum vitae.
        </p>
      </div>
    </a>
  );
}

export default HomeBlogCard;
