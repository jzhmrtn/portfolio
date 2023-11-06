import React from "react";
import jScriptLogo from "../assets/javascript.png";
import fBaseLogo from "../assets/firebase.png";
import reactLogo from "../assets/react.png";
import tWindLogo from "../assets/tailwind.png";
import gradPic from "../assets/mebilog.png";

function About() {
  return (
    <div name="about" className="w-full h-fit sm:h-screen bg-[#9BBEC8]">
      <div className="max-w-[1366px] mx-auto py-8 px-8 flex flex-col justify-center h-full gap-4">
        <div className="max-w-[500px] mx-auto justify-center flex">
          <h1 className="underline underline-offset-[12px] py-4 text-4xl bg-[#427D9D] rounded-lg px-4 text-[#DDF2FD] sm:text-6xl font-bold">
            About me
          </h1>
        </div>

        {/* Description about me */}

        <div className="mx-auto flex flex-col-reverse sm:flex-row justify-center items-center gap-8 sm:gap-20">
          <div className="max-w-[500px] mx-auto px-8 bg-[#427D9D] rounded-lg md:px-8 sm:px-2 ">
            <p className="text-[#DDF2FD] md:text-lg sm:text-xl text-sm text-justify py-2 pt-4">
              I am 22 year old recent graduate who aims to work at company where
              I can further expand and improve my knowledge regarding web
              development. I live in the Philippines and I am currently looking
              for a job.
            </p>

            <p className="text-[#DDF2FD] md:text-lg sm:text-xl text-sm text-justify py-2 pb-4">
              I was first exposed to web development when I was in high school
              whereas I was tasked to create a simple calendar using HTML and
              CSS as our final project. I was amazed by how I was able to create
              something that I can use. I then decided to pursue a career in web
              development and enrolled in a university where I was able to learn
              more about software development in general. I was able to learn
              about the different technologies used in web development such as
              HTML, CSS, JavaScript, React, Firebase, and Tailwind CSS.
            </p>
          </div>

          <img
            src={gradPic}
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] sm:mr-auto"
          />
        </div>

        {/* Skills */}

        <div className="max-w-[500px] mx-auto flex-wrap bg-[#427D9D] rounded-lg px-8 py-8 flex gap-2 sm:gap-12 items-center justify-center">
          <div className="flex flex-col sm:gap-2 justify-center items-center">
            <img
              src={reactLogo}
              title="React.js"
              className="w-10 sm:w-14"
              alt=""
            />
            <p className="text-[#DDF2FD]">React.js</p>
          </div>
          <div className="flex flex-col sm:gap-2 justify-center items-center">
            <img
              src={jScriptLogo}
              title="Javascript"
              className="w-10 sm:w-14"
              alt=""
            />
            <p className="text-[#DDF2FD]">Javascript</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src={fBaseLogo}
              title="Firebase"
              className="w-10 sm:w-14"
              alt=""
            />
            <p className="text-[#DDF2FD]">Firebase</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src={tWindLogo}
              title="Tailwind CSS"
              className="w-10 sm:w-14"
              alt=""
            />
            <p className="text-[#DDF2FD]">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
