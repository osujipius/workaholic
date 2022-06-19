import React from "react";
import ReviewCard from "../atoms/ReviewCard";

/* Swiper Modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

/* Swiper CSS */
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container, Typography } from "@mui/material";

function Review() {
  return (
    <Box sx={{ margin: "10em 0 0 0" }}>
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontFamily: "Merriweather",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          What People Say About Us
        </Typography>
      </Container>

      <Swiper
        style={{
          margin: "0em 0 0 0em",
          padding: "5em 0 0 5em",
          minHeight: "40em",
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
          <ReviewCard
            name={"Osuji Pius"}
            occupation={"Software Engineer"}
            description={
              "Amazing pool of opportunities. This platform is amazing, bringing lucrative and worthwhile job positions to your doorstep. Easy to navigate and use"
            }
            avatarImage={"https://pius-osuji.netlify.app/images/pius.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            name={"Okereke Chinweotito"}
            occupation={"Frontend Developer"}
            description={
              "Great interface and easy to use. Good for looking for freelancers or working as a freelancer. However, the freelancer fee is a bit steep and cuts into earnings."
            }
            avatarImage={
              "https://www.okereke.dev/static/0547c30639cae5c7a90a20124794832f/af4d5/me.avif"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            name={"Zubby Edison"}
            occupation={"Sales & Marketing"}
            description={
              "Was able to launch my career with the help of workaholic. Don't know how to describe my gratitude with words. Thank you & God bless workaholic!!!"
            }
            avatarImage={
              "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/254250708_2980855615463093_5284083969262653228_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFUdcRHlWjmnrS1XaefEICncqu8h1JGtUlyq7yHUka1STDpZRgrM4HhaMZGUjnmaOMUdBNUagutekRcXtgBhLzd&_nc_ohc=EUiOmN8YHmQAX8uBShe&_nc_ht=scontent-los2-1.xx&oh=00_AT-21kXfBh0vtVFtsMfizqPy-U9XdoURPLbY1WqfXiNz5Q&oe=62B402CF"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            name={"Micheal Huhges"}
            occupation={"Technical Recruiter"}
            description={
              "Everyone can go to Workaholic for exactly what they need, no matter what the scope requires. It has changed and revolutionized the job market as we know it.”"
            }
            avatarImage={"https://avatars.githubusercontent.com/u/3834780?v=4"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            name={"Melina Scott"}
            occupation={"Accountant"}
            description={
              "Our team’s distribution is its greatest asset. We have a powerful diversity of thought and experience that wouldn’t be possible if we were co-located thanks to workaholic."
            }
            avatarImage={"https://avatars.githubusercontent.com/u/6599979?v=4"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            name={"Dennis Chukwunta"}
            occupation={"Data Scientist"}
            description={
              "Workaholic has changed my life for the better. The application runs smoothly to connect job seekers to work without a hitch. Their team is doing an excellent job"
            }
            avatarImage={"https://avatars.githubusercontent.com/u/25160953?v=4"}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Review;
