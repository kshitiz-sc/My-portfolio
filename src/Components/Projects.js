import React from "react";
import { useEffect, useState } from "react";
import sanityClient from "../client";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Projects = () => {
  const [projectsdata, setprojectsdata] = useState(null);
  useEffect(() => {
    sanityClient.fetch(
      `*[_type=="project"]{
          projectname,
          desc,
          projectlink,
        }`
    )
      .then((data) => {
        setprojectsdata(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen">
    {/* <img src={bookbg} alt="Background_image" className="absolute object-cover h-full min-w-full -z-10"/> */}
      <div className="flex justify-center sm:text-2xl text-lg rob mb-2">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Below are my projects. Take a look at them !")
            .start();
        }}
        options={{
          deleteSpeed: 25,
          delay: 10,
          // autoStart:true
        }}
      />
        {/* <h1>Below are my Projects. Take a look at them !</h1> */}
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 mt-4 grid-cols-1">
        {projectsdata &&
          projectsdata.map((currentproject, index) => {
            return(
              <motion.article className="border-solid border-black border-2 p-3 rounded-lg lg:m-3 m-2 shadow-neutral-950 shadow-lg" animate={{x:0}} initial={{x:'-100vw'}} transition={{type:"spring", stiffness:200}}>
              <h1 className="sm:text-3xl m-2 text-lg">
                <strong>Project title:-{currentproject.projectname}</strong>
              </h1>
              <motion.h2 className="m-1" whileHover={{scale:1.08, originX: 0}}><strong>Project link:-</strong> <motion.a className="hover:underline hover:text-cyan-600 underline" href={currentproject.projectlink} target="_blank" rel="noreferrer" >{currentproject.projectlink}</motion.a></motion.h2>
              <p className="m-1 cursive lg:text-lg sm:text-base"><strong>Description:-</strong>{currentproject.desc}</p>
            </motion.article>
            )
          })}
      </div>
    </div>
  );
};

export default Projects;
