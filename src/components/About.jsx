import React from "react";
import Cv from "../assets/Cv.pdf";
import Perro from "../assets/Perro.jpg";

const About = () => {
  return (
    <section className="about section">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={Perro} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Web developer with 6 months of experience in improving, with udemy
            certifications, computer systems engineering student.{" "}
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">6</span>
              <span className="about__info-name"> Months of experience</span>
            </div>

            <div>
              <span className="about__info-title">8+</span>
              <span className="about__info-name"> project</span>
            </div>
          </div>

          <div className="about__buttons">
            <a download="" href={Cv} className="button button--flex">
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
