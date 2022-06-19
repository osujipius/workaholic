import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FadeIn } from "../helperFunctions/FadeIn.js";

const topSkills = [
  "Software Engineer",
  "Frontend Developer",
  "Data Scientist",
  "Andriod Developer",
  "Bookkeeping",
  "Content Writer",
  "Copy Writer",
  "Video Analyst",
  "IOS Developer",
];

const trendingSkills = [
  "Blockchain",
  "Python",
  "React.js",
  "Node.js",
  "Ghostwriters",
  "Vue.js",
  "Web Developers",
  "Swift Developers",
  "HR Consulting",
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <FadeIn>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "center",
            height: "auto",
            my: 10,
          }}
        >
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "#14a800",
              },
            }}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              "& button.Mui-selected": { color: "#14a800" },
            }}
          >
            <Tab
              sx={{
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: { md: "1.3em", xs: "1em" },
                my: 2,
              }}
              label="Top Skills"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: { md: "1.3em", xs: "1em" },
                my: 2,
              }}
              label="Trending Skills"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: { md: "1.3em", xs: "1em" },
                my: 2,
              }}
              label="Item Three"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            {topSkills.map((topSkill) => (
              <Typography
                sx={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: { md: "2em", xs: "1.5em" },
                  color: "#2e2e2e",
                }}
              >
                {topSkill}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {trendingSkills.map((trendingSkill) => (
              <Typography
                sx={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: { md: "2em", xs: "1.5em" },
                  color: "#2e2e2e",
                }}
              >
                {trendingSkill}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Container>
    </FadeIn>
  );
}
