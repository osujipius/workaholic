import React from "react";
import "./blogCard.css";
import DefaultImage from "../../../assets/default.jpg";
import BlogLogo from "../../../assets/blog-logo.jpg";

function BlogCard({
  date,
  dateTime,
  title,
  imageUrl,
  href,
  description,
  author,
  style,
  source,
}) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src={imageUrl || DefaultImage}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="flex items-center mt-8 text-xs gap-x-4">
          <time dateTime={dateTime || ""} className="text-gray-500">
            {date}
          </time>

          {source?.name || ""}
        </div>
        <div className="relative group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={href} target="_blank" rel="noreferrer">
              <span className="absolute inset-0" />
              {title || ""}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
            {description || ""}
          </p>
        </div>
        <div className="relative flex items-center mt-8 gap-x-4">
          <img
            src={BlogLogo}
            alt=""
            className="w-10 h-10 bg-gray-100 rounded-full"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <span className="absolute inset-0" />
              {author || "Workaholic"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
