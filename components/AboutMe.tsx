import Image from "next/image";
import React from "react";
function AboutMe() {
  return (
    <>
      <section>
        {/* <div className=" p-4 max-w-5xl mx-auto text-center space-y-4">
          <h5 className="text-lg font-medium text-yellow-500">
            My Qualification
          </h5>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Awesome Journey
          </h2>
        </div> */}
        <div className="lg:flex justify-around inline-block  p-5 w-full bg-neutral-100">
          <div className="relative mx-2 my-8">
            <div className="absolute bg-zinc-400 transform -rotate-6 shadow-2xl rounded-3xl inset-0 h-64 sm:h-80 md:h-72 lg:h-96 border-2 lg:w-full lg:mx-0"></div>
            <Image
              src="/another.png"
              width={400}
              height={300}
              className="relative h-64 sm:h-80 md:h-72 lg:h-96 lg:w-full w-full rounded-3xl "
              alt="Intro"
            />
          </div>
          <div className="w-full lg:w-1/2 px-5">
            <div className="space-y-4 lg:my-5 my-12">
              <h5 className="text-lg font-medium text-indigo-600">My Intro</h5>
              <h2 className="text-2xl md:text-2xl font-bold text-blue-900">
                About Me
              </h2>
              <p className="lg:text-md font-medium text-gray-500 max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                inventore debitis. Nostrum mollitia culpa impedit officiis. Rem
                deleniti autem, debitis commodi quos tempore ab esse, earum ea,
                iste praesentium eius? Illum, cum.
              </p>
            </div>
            <div className="mt-8 space-y-2">
              <div className="flex flex-wrap">
                <div className="flex space-x-2 items-center mr-4">
                  <div>
                    <svg
                      className="devfont devfont-user h-5 w-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                      <path d="M3 20a10.208 10.208 0 0 1 3.804-3.66A10.708 10.708 0 0 1 12 15c1.824 0 3.616.462 5.196 1.34 1.58.877 2.892 2.14 3.804 3.66"></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Name :</div>
                </div>
                <div className="font-medium text-gray-500">Mary Hardy</div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex space-x-2 items-center mr-4">
                  <div>
                    <svg
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Phone :</div>
                </div>
                <div className="font-medium text-gray-500">+92 3234080400</div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex space-x-2 items-center mr-4">
                  <div>
                    <svg
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Email :</div>
                </div>
                <div className="font-medium text-gray-500">
                  maryhardy@hotmail.com
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl lg:text-1xl text-gray-600 font-bold">
                My interests
              </h3>
              <div className="flex flex-wrap">
                <div className="flex space-x-2 items-center mr-4 mb-4">
                  <div>
                    <svg
                      className="h-7 w-7 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Music</div>
                </div>
                <div className="flex space-x-2 items-center mr-4 mb-4">
                  <div>
                    <svg
                      className="h-7 w-7 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Travel</div>
                </div>
                <div className="flex space-x-2 items-center mr-4 mb-4">
                  <div>
                    <svg
                      className="h-7 w-7 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Video</div>
                </div>
                <div className="flex space-x-2 items-center mr-4 mb-4">
                  <div>
                    <svg
                      className="h-7 w-7 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-600">Photo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
