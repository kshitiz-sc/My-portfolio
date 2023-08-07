import React from "react";
import Typewriter from "typewriter-effect";
import bgvideo from "./background.mp4";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div className="flex hand-jet sm:text-5xl items-center justify-center h-screen text-3xl text-slate-50" exit={{x:'100vw'}}>
      <motion.video className="bg-video object-cover absolute -z-10 h-screen w-screen opacity-90" autoPlay loop muted animate={{opacity:1}} initial={{opacity:0}} transition={{duration:2}}>
        <source src={bgvideo} type="video/mp4"/>
      </motion.video>
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
    </motion.div>
  );
};

export default Home;
