"use client";
import React from "react";
import { global } from "styled-jsx/css";
import { delay, motion } from "framer-motion";

const Part1 = () => {
  const handleHoverI1 = () => {
    document.querySelector(".tech-2").style.opacity = "0.7";
    document.querySelector(".tech-3").style.opacity = "0.7";
    document.querySelector(".tech-4").style.opacity = "0.7";
    document.querySelector(".tech-5").style.opacity = "0.7";
    document.querySelector(".tech-6").style.opacity = "0.7";
  };

  const handleHoverO1 = () => {
    document.querySelector(".tech-2").style.opacity = "1";
    document.querySelector(".tech-3").style.opacity = "1";
    document.querySelector(".tech-4").style.opacity = "1";
    document.querySelector(".tech-5").style.opacity = "1";
    document.querySelector(".tech-6").style.opacity = "1";
  };
  const handleHoverI2 = () => {
    document.querySelector(".tech-1").style.opacity = "0.7";
    document.querySelector(".tech-3").style.opacity = "0.7";
    document.querySelector(".tech-4").style.opacity = "0.7";
    document.querySelector(".tech-5").style.opacity = "0.7";
    document.querySelector(".tech-6").style.opacity = "0.7";
  };

  const handleHoverO2 = () => {
    document.querySelector(".tech-1").style.opacity = "1";
    document.querySelector(".tech-3").style.opacity = "1";
    document.querySelector(".tech-4").style.opacity = "1";
    document.querySelector(".tech-5").style.opacity = "1";
    document.querySelector(".tech-6").style.opacity = "1";
  };
  const handleHoverI3 = () => {
    document.querySelector(".tech-1").style.opacity = "0.7";
    document.querySelector(".tech-2").style.opacity = "0.7";
    document.querySelector(".tech-4").style.opacity = "0.7";
    document.querySelector(".tech-5").style.opacity = "0.7";
    document.querySelector(".tech-6").style.opacity = "0.7";
  };

  const handleHoverO3 = () => {
    document.querySelector(".tech-1").style.opacity = "1";
    document.querySelector(".tech-2").style.opacity = "1";
    document.querySelector(".tech-4").style.opacity = "1";
    document.querySelector(".tech-5").style.opacity = "1";
    document.querySelector(".tech-6").style.opacity = "1";
  };
  const handleHoverI4 = () => {
    document.querySelector(".tech-1").style.opacity = "0.7";
    document.querySelector(".tech-2").style.opacity = "0.7";
    document.querySelector(".tech-3").style.opacity = "0.7";
    document.querySelector(".tech-5").style.opacity = "0.7";
    document.querySelector(".tech-6").style.opacity = "0.7";
  };

  const handleHoverO4 = () => {
    document.querySelector(".tech-1").style.opacity = "1";
    document.querySelector(".tech-2").style.opacity = "1";
    document.querySelector(".tech-3").style.opacity = "1";
    document.querySelector(".tech-5").style.opacity = "1";
    document.querySelector(".tech-6").style.opacity = "1";
  };
  const handleHoverI5 = () => {
    document.querySelector(".tech-1").style.opacity = "0.7";
    document.querySelector(".tech-2").style.opacity = "0.7";
    document.querySelector(".tech-3").style.opacity = "0.7";
    document.querySelector(".tech-4").style.opacity = "0.7";
    document.querySelector(".tech-6").style.opacity = "0.7";
  };

  const handleHoverO5 = () => {
    document.querySelector(".tech-1").style.opacity = "1";
    document.querySelector(".tech-2").style.opacity = "1";
    document.querySelector(".tech-3").style.opacity = "1";
    document.querySelector(".tech-4").style.opacity = "1";
    document.querySelector(".tech-6").style.opacity = "1";
  };
  const handleHoverI6 = () => {
    document.querySelector(".tech-1").style.opacity = "0.7";
    document.querySelector(".tech-2").style.opacity = "0.7";
    document.querySelector(".tech-3").style.opacity = "0.7";
    document.querySelector(".tech-4").style.opacity = "0.7";
    document.querySelector(".tech-5").style.opacity = "0.7";
  };

  const handleHoverO6 = () => {
    document.querySelector(".tech-1").style.opacity = "1";
    document.querySelector(".tech-2").style.opacity = "1";
    document.querySelector(".tech-3").style.opacity = "1";
    document.querySelector(".tech-4").style.opacity = "1";
    document.querySelector(".tech-5").style.opacity = "1";
  };
  return (
    <motion.div className="section1 ">
      <motion.div
        className="  text-center p-4 mb-24"
        animate={{ y: [100, 50, 0] }}
      >
        <h1 className=" sech text-7xl text-white " id="home">
          Welcome to DJS NOVA
        </h1>
      </motion.div>
      <motion.div
        className="section1-2 grid grid-cols-3 grid-rows-2 text-center mt-6 gap-10 m-6 cursor-pointer "
        animate={{ y: [100, 50, 0] }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-1 "
          onMouseEnter={handleHoverI1}
          onMouseLeave={handleHoverO1}
        >
          <h2 className="text-slate-400 tit1">Research</h2>

          <h2>Types of Research Projects:</h2>
          <p>
            <span className="text-green-500 text-left">
              Astronomy and Astrophysics:
            </span>
            Observing celestial objects and phenomena. Studying stars, planets,
            galaxies, and cosmic events.
          </p>
          <p>
            <span className="text-green-500 text-left"> Space Technology:</span>
            Designing and building small satellites (CubeSats). Experimenting
            with space instrumentation and sensors.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-2 "
          onMouseEnter={handleHoverI2}
          onMouseLeave={handleHoverO2}
        >
          <h2 className="text-slate-800 tit1">Technical:Webdev</h2>
          <p>
            The Technical Web Development Department within the Space Club
            Committee of DJS Nova plays a pivotal role in advancing the club's
            mission of promoting space exploration, astronomy, and science
            communication. This dedicated team of web developers combines their
            passion for technology with their fascination for the cosmos to
            create an engaging online presence for the club.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-3"
          onMouseEnter={handleHoverI3}
          onMouseLeave={handleHoverO3}
        >
          <h2 className="tit1">Technical:AI/ML</h2>
          <p>
            The Technical AI-ML Department is a pivotal component of the Space
            Club Committee of DJS Nova . It brings together a passionate group
            of students who are enthusiastic about harnessing the power of
            artificial intelligence and machine learning in the field of space
            exploration and research. This department plays a crucial role in
            advancing the club's objectives and contributing to the broader
            domain of space science and technology.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-4"
          onMouseEnter={handleHoverI4}
          onMouseLeave={handleHoverO4}
        >
          <h2 className="tit1">Management</h2>
          <p>
            The Management Department in the Space Club Committee plays a
            pivotal role in ensuring the effective organization, coordination,
            and smooth functioning of the club's activities and initiatives.
            This department serves as the backbone of the club, facilitating its
            mission to explore and promote interest in space-related endeavors.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-5"
          onMouseEnter={handleHoverI5}
          onMouseLeave={handleHoverO5}
        >
          <h2 className="tit1">Marketing and Public Relations</h2>
          <p>
            The Marketing Department in the College Space Club Committee plays a
            crucial role in promoting the club's activities, engaging with the
            student body and the broader community, and ensuring the club's
            visibility and success. This department focuses on communication,
            branding, and outreach strategies tailored to the club's objectives.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="tech-6"
          onMouseEnter={handleHoverI6}
          onMouseLeave={handleHoverO6}
        >
          <h2 className="tit1">Creatives and Editorial</h2>
          <p>
            The Creatives and Editorial Department in the Space Club Committee
            of our college plays a crucial role in advancing the club's mission
            to explore and promote space-related knowledge and activities. This
            department combines artistic creativity with effective communication
            to engage, inform, and inspire members and the wider community.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        id="about"
        animate={{ opacity: [0, 0.5, 0.7, 0.8, 1] }}
        className="foot bg-black xl:text-center 2xl:text-center md:text-center lg:text-center sm:text-left text-blue-600 h-20 pt-5"
      >
        &copy; All rights are reserved to DJS Nova
      </motion.div>
    </motion.div>
  );
};

export default Part1;
