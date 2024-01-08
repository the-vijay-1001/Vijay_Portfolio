"use client"

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-250px 0px",
    threshold: 0.5,
  });

  return (
    <>
      <div ref={ref} id="pricing">
        {inView && <>
          <div
            className="max-w-12xl mx-auto py-2 lg:py-24 lg:px-40 px-2  bg-center bg-cover"
            style={{
              backgroundImage:
                "url(/scattered-forcefields.svg)",
            }}
          >
            <div className="max-w-md mx-auto mb-14 text-center">
              <motion.h1
                initial={{ opacity: 0, x: -350, }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-4xl font-semibold mb-6 lg:text-5xl">
                <span className="text-purple-700">Flexible</span> Plans
              </motion.h1>
              <div className="flex justify-center mx-auto m-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
              <motion.p
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl text-gray-500 font-medium">
                Choose a plan that works best for you and your team.
              </motion.p>
            </div>

            <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full flex-1 mt-8 p-8 order-2 bg-neutral-200 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                  <img
                    src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                    alt=""
                    className="rounded-3xl w-20 h-20"
                  />
                  <div className="ml-5">
                    <span className="block text-2xl font-semibold">Basic</span>
                    <span>
                      <span className="font-medium text-gray-500 text-xl align-top">
                        $&thinsp;
                      </span>
                      <span className="text-3xl font-bold">10 </span>
                    </span>
                    <span className="text-gray-500 font-medium">/ user</span>
                  </div>
                </div>
                <ul className="mb-7 font-medium text-gray-500">
                  <li className="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      Get started with <span className="text-black">messaging</span>
                    </span>
                  </li>
                  <li className="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      Flexible <span className="text-black">team meetings</span>
                    </span>
                  </li>
                  <li className="flex text-lg">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      <span className="text-black">5 TB</span> cloud storage
                    </span>
                  </li>
                </ul>
                <a
                  href="#/"
                  className="flex justify-center items-center bg-purple-700 rounded-xl py-2 px-4 text-center text-white text-xl"
                >
                  Choose Plan
                  <img
                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                    className="ml-2"
                  />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -400, scale: 0.7 }}
                whileInView={{ opacity: 1 }}
                animate={{
                  y: 1,
                  scale: 1
                }}
                transition={{ delay: 1, duration: 0.5 }}
                className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                  <img
                    src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                    alt=""
                    className="rounded-3xl w-20 h-20"
                  />
                  <div className="ml-5">
                    <span className="block text-3xl lg:text-2xl font-semibold text-white">
                      Tranding
                    </span>
                    <span>
                      <span className="font-medium text-xl align-top">
                        $&thinsp;
                      </span>
                      <span className="text-3xl font-bold text-white">24 </span>
                    </span>
                    <span className="font-medium">/ user</span>
                  </div>
                </div>
                <ul className="mb-10 font-medium text-xl">
                  <li className="flex mb-6">
                    <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                    <span className="ml-3">
                      All features in <span className="text-white">Basic</span>
                    </span>
                  </li>
                  <li className="flex mb-6">
                    <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                    <span className="ml-3">
                      Flexible <span className="text-white">call scheduling</span>
                    </span>
                  </li>
                  <li className="flex">
                    <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                    <span className="ml-3">
                      <span className="text-white">15 TB</span> cloud storage
                    </span>
                  </li>
                </ul>
                <a
                  href="#/"
                  className="flex justify-center items-center bg-purple-700 rounded-xl py-3 px-4 text-center text-white text-2xl"
                >
                  Choose Plan
                  <img
                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                    className="ml-2"
                  />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full flex-1 mt-8 p-8 order-3 bg-neutral-200 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                  <img
                    src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                    alt=""
                    className="rounded-3xl w-20 h-20"
                  />
                  <div className="ml-5">
                    <span className="block text-2xl font-semibold">Enterprise</span>
                    <span>
                      <span className="font-medium text-gray-500 text-xl align-top">
                        $&thinsp;
                      </span>
                      <span className="text-3xl font-bold">35 </span>
                    </span>
                    <span className="text-gray-500 font-medium">/ user</span>
                  </div>
                </div>
                <ul className="mb-7 font-medium text-gray-500">
                  <li className="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      All features in <span className="text-black">Startup</span>
                    </span>
                  </li>
                  <li className="flex text-lg mb-2">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      Growth <span className="text-black">oriented</span>
                    </span>
                  </li>
                  <li className="flex text-lg">
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">
                      <span className="text-black">Unlimited</span> cloud storage
                    </span>
                  </li>
                </ul>
                <a
                  href="#/"
                  className="flex justify-center items-center bg-purple-700 rounded-xl py-2 px-4 text-center text-white text-xl"
                >
                  Choose Plan
                  <img
                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                    className="ml-2"
                  />
                </a>
              </motion.div>
            </div>

          </div>
        </>}
      </div>
    </>
  );
}

export default Pricing;
