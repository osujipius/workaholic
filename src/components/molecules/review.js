import React from "react";
import ReviewCard from "../atoms/ReviewCard";

/* Swiper Modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

/* Swiper CSS */
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container, Grid, Typography } from "@mui/material";

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
      </Swiper>
    </Box>
  );
}

export default Review;
