import { FC } from "react";
import { Button, Typography, Grid, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const theme = useTheme();

  const handleLinkedInButtonClick = () => {
    <Link to="https://www.linkedin.com/in/stefano-ramirez-novello/" />;
  };

  return (
    <>
      <Grid container sx={{ marginTop: 12, marginBottom: 8 }}>
        <Grid item>
          <Typography variant="h1" gutterBottom>
            Welcome to my Website!
          </Typography>

          <Typography variant={"h6"}>
            I specialize in web development, utilizing cutting-edge technologies
            like React, Vite, and Material UI to create exceptional digital
            solutions. With meticulous attention to detail, I craft sleek and
            intuitive interfaces that prioritize user experience. By staying
            updated with the latest industry trends, I ensure your website meets
            the highest standards of performance and aesthetics. Let's
            collaborate to elevate your online presence and achieve your digital
            goals!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleLinkedInButtonClick}
            sx={{ margin: 6 }}
          >
            <LinkedInIcon sx={{ marginRight: 1 }} />
            <a href="https://www.linkedin.com/in/stefano-ramirez-novello/">
              Contact me!
            </a>
          </Button>
          <Button variant="contained" color="primary" sx={{ margin: 6 }}>
            <GitHubIcon sx={{ marginRight: 1 }} />
            <a href="https://github.com/ramirezStefano">Follow me!</a>
          </Button>

          {/* </Paper> */}
        </Grid>
        {/* <ParticlesBg color="#ff0000" num={50} type="cobweb" bg={true} /> */}
        <ParticlesBg
          color={theme.palette.success.main}
          num={30}
          type="cobweb"
          bg={true}
        />
      </Grid>
    </>
  );
};

export default LandingPage;
