import React from "react";
import { useEffect, useState } from "react";
import sanityClient from "../client";
import Typewriter from 'typewriter-effect';
import bookbg from './book-bg.jpg';

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
    <>
    <img src={bookbg} alt="Background_image" className="absolute object-cover w-full h-screen -z-10"/>
      <div className="flex justify-center sm:text-2xl text-lg rob m-2">
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
              <article className="border-solid border-black border-2 p-3 rounded-lg lg:m-3 m-2 shadow-slate-400 shadow-lg ">
              <h1 className="text-3xl m-2">
                <strong>Project title:-{currentproject.projectname}</strong>
              </h1>
              <h2 className="m-1"><strong>Project link:-</strong> <a className="hover:underline hover:text-cyan-600" href={currentproject.projectlink} target="_blank" rel="noreferrer">{currentproject.projectlink}</a></h2>
              <p className="m-1 cursive lg:text-lg"><strong>Description:-</strong>{currentproject.desc}</p>
            </article>
            )
          })}
      </div>
    </>
  );
};

export default Projects;
