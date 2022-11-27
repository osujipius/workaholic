import { Box, Container, Typography } from "@mui/material";
import { FadeIn } from "../components/molecules/helperFunctions/FadeIn";

export default function About() {
  return (
    <>
      <FadeIn>
        <Container
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            pb: 5,
          }}
        >
          <header className="section-header">
            <p style={{ marginTop: "3em", marginBottom: "-1em" }}>About Us</p>
          </header>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Lexend Deca', sans-serif",
              color: "#317773",
              mb: 7,
            }}
          >
            The world's work marketplace
          </Typography>

          <Typography
            variant="p"
            sx={{ fontSize: "1.3em", fontFamily: "'Lexend Deca', sans-serif" }}
          >
            Workaholic launched two months ago by pioneering a better way of
            working, helping businesses find more flexibility and connecting
            talent with more opportunities.
            <br />
            <br /> Our mission to create economic opportunities so people have
            better lives has taken us so much further. As a result, we aim to
            become the world’s work marketplace where every day businesses of
            all sizes and independent talent from around the globe meet here to
            accomplish incredible things.
            <br />
            <br /> Like for so many, Upwork has had a big impact on my life. I
            first came to this company on the product team and over the years
            have understood what makes this platform really work: the
            relationships.
            <br />
            <br />{" "}
            <span style={{ fontWeight: "bold" }}>We see what you do</span>{" "}
            <br />I have personally seen the passion and commitment that every
            user puts into their work here. Whether it’s a quick powerpoint
            presentation or a multi-year development project - both talent on
            Workaholic and our clients care about doing really good work because
            they love what they do.
            <br />
            <br /> In fact, we designed it that way. Our work marketplace aligns
            the goals of our clients with the goals of talent on Upwork so that
            outcomes are better and everyone grows in the same direction. You’ll
            find tools to develop your skills, evolve your business, and gain
            the control and freedom you need for success.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Workaholic is your workforce
            </span>
            <br />
            <br /> If you’re a client that’s come here to get things done, use
            this workforce of independent talent to build faster and transform
            your business. If you’re independent talent that’s come here to
            realize your potential, know that you are a valuable and
            instrumental part of someone’s team.
            <br />
            <br /> We make work more rewarding We see your vision, and
            everything we do is an effort to help you make the connections that
            will turn that vision into reality, by building your Virtual Talent
            Bench of trusted people. The impact is both economic and personal,
            in the everyday and in the long run. When you find the right people,
            you stop working to get by and start working strategically. That is
            when real opportunity emerges. I can say with confidence that the
            Upwork team - the team that serves you the talent and you the client
            - is still driven by our mission to create economic opportunity for
            our people around the world. You’re our people now, and we’re glad
            that you’re here. We can’t wait to see what you do.
          </Typography>
        </Container>
      </FadeIn>
    </>
  );
}
