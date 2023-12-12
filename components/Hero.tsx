"use client";

import React, { useEffect, useState } from "react";
import CommonButton from "./CommonButton";

function Hero() {
  const changeThing = [
    "Full Stack Developer",
    "Web Developer",
    "Web Designer",
    "UI/UX Designer",
    "Devops Developer",
    "Graphic Designer",
  ];
  const [actualData, setActualData] = useState(changeThing[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = changeThing.indexOf(actualData);
      const nextIndex = (currentIndex + 1) % changeThing.length;
      setActualData(changeThing[nextIndex]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [actualData]);

  return <>
    <section className=" w-full border-sky-950 lg:py-24">
      <div className="h-auto w-full border-slate-800  lg:flex inline-block justify-around items-center px-2">
        <div className="lg:w-1/2 w-full  p-5">
          <div className="my-8">
            <h1 className="font-bold text-5xl">Hey ! I'm</h1>
          </div>
          <div>
            <h1 className="animate-bounce font-bold text-4xl text-indigo-600">
              <label className=" text-5xl">{actualData}</label>
            </h1>
          </div>
          <div>
            <p className="text-slate-500 my-5">
              Obviously I'm a Web Developer.As a Web Developer with over 2
              years of experience. Experienced with all stages of the
              development.
            </p>
          </div>
          <div className="mt-5 md:flex">
            <div className="me-3 mb-5">
              <CommonButton title="Contact Me" icon="fa fa-phone" />
            </div>
            <div>
              <CommonButton title="Hire Me" icon="fa fa-user-circle-o" />
            </div>
          </div>
        </div>
        <div className="h-96">
          <div
            className="lg:w-[600px] object-cover w-full"
            style={{
              backgroundImage: "url('/user2_cleanup.jpg') ",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </section>
  </>
}

export default Hero;
