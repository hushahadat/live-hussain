import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbFolders } from "react-icons/tb";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h5>About Me</h5>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 + Years Working</small>
            </article>

            <article className="about_card">
              <TbFolders className="about_icon" />
              <h5>Projects</h5>
              <small>Worked In Multiple Projects</small>
            </article>

            <article className="about_card">
              <MdCastForEducation className="about_icon" />
              <h5>Education</h5>
              <small>BE in Computer Science</small>
            </article>
          </div>

          <p>
            Highly motivated and skilled professional with 1+ Year of experience
            in Web App Development. Proven track record of success in MERN Stack.
            Seeking to leverage my skills and experience to contribute to a
            dynamic team and achieve company goals .
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
