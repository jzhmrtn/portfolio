import React, { useContext } from "react";
import Carousel from "../components/Carousel";
import { AppContext } from "../App";

const Projects = () => {
  const { showMobileMenu } = useContext(AppContext);

  return (
    <div name="projects" className="w-full min-h-screen h-fit bg-[#427D9D]">
      <div className="max-w-[1280px] mx-auto py-8 px-8 flex flex-col justify-center min-h-screen h-fit gap-8">
        <div className="max-w-[500px] mx-auto justify-center flex">
          <h1 className="underline underline-offset-[12px] py-4 text-4xl bg-[#DDF2FD] rounded-lg px-4 text-[#164863] sm:text-6xl font-bold">
            Projects
          </h1>
        </div>

        {/* Projects Div */}

        <div
          name="containerDiv"
          className="flex flex-col h-full items-center gap-0 sm:gap-4 py-4 px-4"
        >
          <div
            className="w-full h-full flex flex-col sm:flex-row sm:gap-4 items-center px-4 py-4 gap-4 bg-[#DDF2FD] rounded-lg"
            name="mainDiv"
          >
            <div
              className={
                !showMobileMenu
                  ? "w-full sm:w-full sm:h-[350px] sm:max-h-[400px] -z-8"
                  : "w-full sm:w-full sm:h-[350px] sm:max-h-[400px] -z-10"
              }
            >
              <Carousel />
            </div>

            <div className="max-w-[500px]">
              <h1
                className="text-3xl bg-[#164863] text-[#DDF2FD] font-bold px-2 py-2"
                name="title"
              >
                Mapa Emiliano
              </h1>
              <p
                className="text-xl text-justify text-[#164863] px-2 py-2 flex flex-col gap-2"
                name="description"
              >
                Mapa Emiliano is an interactive school map that allows students
                to find their classrooms and other important locations in the
                school. It also allows students to find the fastest route to
                their destination.
                <span className="font-bold">Demo account:</span>
                <span>Username: adminMapa@gmail.com</span>
                <span>Password: AdminMapaEmilianoAJMP</span>
              </p>
              <p className="text-md text-center text-[#164863]" name="stack">
                HTML || CSS || Plain Javascript || Firebase CHANGE FONT
              </p>
              <div
                className="flex gap-4 justify-center items-center px-4 py-4"
                name="codeDemoDiv"
              >
                <button
                  onClick={() => window.open("https://mapaemiliano.github.io/")}
                  className="text-2xl text-[#DDF2FD] bg-[#164863] border-2 border-[#164863] px-2 py-2 hover:py-4 hover:px-4 duration-300"
                >
                  Demo
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/MapaEmiliano/mapaemiliano.github.io"
                    )
                  }
                  className="text-2xl text-[#164863] border-2 border-[#164863] px-2 py-2 hover:py-4 hover:px-4 duration-300"
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
