import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Nate",
  lastName: "Wa Mwenze",
  bithday: "10.17",
  address: "Salt Lake City, USA",
  phn: "0",
  email: "natekodi@live.com",
  serviceLists: ["Web Development", "Audio Engineering", "Music Production"],
  skills: {
    programming: [
      { name: "TypeScript", value: "95" },
      { name: "Azure", value: "80" },
      { name: "Go", value: "90" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "French", value: "80" },
    ],
  },
  education: [
    {
      year: "2009 - 2011",
      unv: "Savannah College of Art and Design",
      degree: "Bachelor Degree",
    },
  ],
  working: [
    {
      year: "2021 - running",
      company: "SS&C",
      deg: "Software Engineer",
    },
    { year: "2013 - 2020", company: "NateKodi", deg: "Audio Engineer" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div
                  className="main"
                  data-img-url="img/about/AboutImage.jpeg"
                />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Nate</span> I am a front end web developer
                  with experience working with full stack Javascript/Node
                  applications. {`I'm`} also experienced in audio mixing and
                  mastering, and music production.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
