import React from "react";
import Typewriter from "typewriter-effect";
import bgvideo from "./background.mp4";

const Home = () => {
  return (
    <div className="flex hand-jet sm:text-5xl items-center justify-center h-screen text-3xl text-slate-50">
      <video className="bg-video object-cover absolute -z-10 h-screen w-screen opacity-90" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi ! My name is Kshitiz Singh Chauhan. ")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcome to my Portfolio")
            .start();
        }}
        options={{
          loop: true,
          deleteSpeed: 25,
          delay: 50,
          // autoStart:true
        }}
      />
    </div>
  );
};

export default Home;
