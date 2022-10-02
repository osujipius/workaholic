/* Swiper Modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

/* Swiper CSS */
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container, Typography } from "@mui/material";
import TrendingSkillsCard from "../atoms/TrendingSkillsCard";

export default function TrendingSkills() {
  return (
    <>
      <Container sx={{ my: 5 }}>
        <header className="section-header">
          <p style={{ marginTop: "3em", marginBottom: "-3em" }}>
            Popular professional services
          </p>
        </header>
        <Swiper
          style={{
            margin: "0em 0 0 0em",
            padding: "5em 0 0 3em",
            minHeight: "35em",
          }}
          breakpoints={{
            10: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              }
              intro={" Build your brand"}
              title={"Logo Design"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              }
              intro={"Engage your audience"}
              title={"Video Explainer"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
              }
              intro={"Color your dreams"}
              title={"Illustration"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
              }
              intro={"Unlock growth online"}
              title={"SEO"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              }
              intro={"Customize your site"}
              title={"WordPress"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingSkillsCard
              src={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              }
              intro={"Share your message"}
              title={"Voice Over"}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
