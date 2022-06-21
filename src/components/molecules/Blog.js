import React from "react";
import HomeBlogCard from "../atoms/homeBlogCard/HomeBlogCard";

function Blog() {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container">
        <header className="section-header">
          <h2>Blog</h2>
          <p>Useful Tips & Resources on Freelance Work</p>
        </header>

        <div className="row">
          <HomeBlogCard
            src={
              "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/how-to-become-a-freelance-web-developer-768x448.jpg"
            }
            title={"6-Step Guide: How to become a Freelance Web Developer "}
            date={"Fri, June 10"}
            link={
              "https://careerfoundry.com/en/blog/web-development/freelance-web-developer/"
            }
          />
          <HomeBlogCard
            src={
              "https://st2.depositphotos.com/1038076/7301/i/600/depositphotos_73018645-stock-photo-freelance.jpg"
            }
            title={
              "16 Best Freelance Websites to Find Work in 2022 - Hostinger"
            }
            date={"Tuesday, June 14"}
            link={"https://www.hostinger.com/tutorials/best-freelance-websites"}
          />

          <HomeBlogCard
            src={
              "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2022/06/marketing-associate.jpeg"
            }
            title={"How To Become a Marketing Associate (2022 Guide)"}
            date={"Monday, June 20"}
            link={
              "https://careerfoundry.com/en/blog/digital-marketing/how-to-become-a-marketing-associate/"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
