import React from "react";
import about from './about.jpg';
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
    <motion.img src={about} alt="Background_image" className="absolute object-cover h-full min-w-full -z-10 bgpic" animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.2}}/>
      <motion.div className="container mx-auto p-2 text-white" animate={{x:0}} initial={{x:'-100vw'}} transition={{delay:0.5, type:"spring", stiffness:150, damping:12}}>
        My name is Kshitiz Singh Chauhan, and I am currently enrolled in the
        pursuit of a Btech degree at Delhi Technological University. I am an
        aspiring developer and self-taught programmer, eager to embark on my
        journey in the world of technology. I have honed my skills in C/C++,
        data structures, algorithms, Object-Oriented Programming (OOPS), and
        Database Management Systems. In addition, I am proficient in HTML, CSS,
        Javascript, Python, NiceGUI, React JS, Node JS, Express JS, and Mongo
        DB. I am dedicated to actively advancing and refining my skillset to
        excel in this dynamic field.
      </motion.div>
      </div>
  );
};

export default About;
