import React from "react";
import BlogCard from "../atoms/blogCard/BlogCard";

function BlogMolecule() {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container">
        <header className="section-header">
          <h2>Blog</h2>
          <p>Useful Tips & Resources on Freelance Work</p>
        </header>

        <div className="row">
          <BlogCard
            src={
              "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/how-to-become-a-freelance-web-developer-768x448.jpg"
            }
            title={"6-Step Guide: How to become a Freelance Web Developer "}
            date={"Fri, June 10"}
            link={
              "https://careerfoundry.com/en/blog/web-development/freelance-web-developer/"
            }
          />
          <BlogCard
            src={
              "https://st2.depositphotos.com/1038076/7301/i/600/depositphotos_73018645-stock-photo-freelance.jpg"
            }
            title={
              "16 Best Freelance Websites to Find Work in 2022 - Hostinger"
            }
            date={"Tuesday, June 14"}
            link={"https://www.hostinger.com/tutorials/best-freelance-websites"}
          />

          <BlogCard
            src={
              "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2022/06/marketing-associate.jpeg"
            }
            title={"How To Become a Marketing Associate (2022 Guide)"}
            date={"Monday, June 20"}
            link={
              "https://careerfoundry.com/en/blog/digital-marketing/how-to-become-a-marketing-associate/"
            }
          />
          <BlogCard
            src={
              "https://cdn.jobsineachstate.com/blog/images/11/office-jobs-galore-7-tips-for-getting-clerical-jobs-youll-love-thumbnail.jpg"
            }
            title={
              "OFFICE JOBS GALORE: 7 TIPS FOR GETTING CLERICAL JOBS YOU'LL LOVE"
            }
            date={"Monday, June 27"}
            link={
              "https://www.jobsineachstate.com/blog/1/10/2020/office-jobs-galore-7-tips-for-getting-clerical-jobs-youll-love/"
            }
          />
          <BlogCard
            src={
              "https://assets-global.website-files.com/606a802fcaa89bc357508cad/62175a4278089c1f995d2639_Blog%20-%203-p-500.png"
            }
            title={
              "How No-Code Solutions Let You Build Apps Without Coding Skills"
            }
            date={"Thursday, June 30"}
            link={"https://blog.fiverr.com/post/no-code-app-development"}
          />
          <BlogCard
            src={
              "https://assets-global.website-files.com/606a802fcaa89bc357508cad/61d4c9aff874f45f32b4f9d9_12.%20(1)-p-500.png"
            }
            title={"5 Best Business Analytics Tools for Tracking Performance"}
            date={"Monday, July 4"}
            link={
              "https://blog.fiverr.com/post/5-best-business-analytics-tools-for-tracking-performance"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default BlogMolecule;
