import React from "react";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#427D9D]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="underline underline-offset-[16px] py-4 text-4xl text-[#DDF2FD] sm:text-8xl font-bold">
          Jozhua Simeon
        </h1>
        <p className="text-xl max-w-[fit-content] px-4 text-[#164863] bg-[#DDF2FD] sm:text-4xl">
          Full-Stack Developer
        </p>
        <p className="text-md py-4 sm:text-xl text-white text-justify max-w-[600px]">
          I am a recent graduate looking to utilize and improve my skills in web
          development. I have a passion for programming and enjoy every second
          spent in learning new technologies.
        </p>
        <div>
          <button className="text-[#DDF2FD] text-xl sm:text-4xl border-2 bg-[#164863] border-[#9BBEC8] rounded-md px-4 py-4 hover:bg-[#164863] hover:px-10 duration-200">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
