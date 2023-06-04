import React from "react";

const Main = () => {
  return (
    <>
      <div className="flex flex-col-reverse  md:flex-row md:mx-24 2xl:mx-80  mx-5 my-4">
        {/* side items */}
        <div className="flex flex-col  items-center md:justify-normal md:items-start md:pl-5 w-full md:w-1/3 ">
          <div className="flex justify-center items-center flex-col md:items-start md:justify-normal">
            <div className="my-2">
              <h1 className="text-[#9E8C6C] font-bold text-xl">Skillset</h1>
            </div>
            <div className="">
              <ul className="py-2 list-none flex items-start flex-col">
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Mobile Development</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-10 md:self-start px-2 md:px-0 items-center flex justify-center flex-col md:items-start">
            <div className="my-2">
              <h1 className="text-[#9E8C6C] font-bold text-xl ">Strengths</h1>
            </div>
            <div className="">
              <ul className="py-2 list-none flex items-start flex-col">
                <li>Detail Oriented</li>
                <li>Tech Savy</li>
                <li>Team Worker</li>
                <li>Strategic Thinker</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-7 md:self-start px-2 md:px-0 items-center flex justify-center flex-col md:items-start">
            <div className="my-2 ">
              <h1 className="text-[#9E8C6C] font-bold text-xl">Languages</h1>
            </div>
            <div className="">
              <ul className="py-2 list-none grid grid-cols-2 gap-2 items-center md:grid md:items-start md:grid-cols-2 ">
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">HTML/CSS</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">Tailwind</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">JavaScript</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">React</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">Python</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">Flask</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">OracleSQL</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">SQLite3</li>
                <li className="bg-[#e9e3d9] px-2 rounded-md text-center">React Native</li>
              </ul>
            </div>
          </div>
        </div>

        {/* main items */}
        <div className="self-start  md:w-2/3">
          {/* about me section */}
          <section className="">
            <div className=" my-2 px-2">
              <h1 className="text-[#000] font-bold text-2xl">About me</h1>
            </div>
            <div className="flex-wrap px-2 pb-1">
              <p>
                Experienced web developer with a keen eye for detail and a focus
                on delivering high-quality results. Proficient in JavaScript,
                React, React Native, Flask, Tailwind, and HTML/CSS. Skilled in
                creating dynamic and user-friendly interfaces, ensuring
                exceptional user experiences. Detail-oriented and tech-savvy, I
                excel in strategic thinking and problem-solving. A strong team
                player who collaborates effectively to achieve project goals.
                Constantly staying up-to-date with the latest technologies and
                trends in web development. Let's work together to bring your web
                projects to life.
              </p>
            </div>
          </section>

          {/* education section */}
          <section className=" mb-2 mt-5">
            <div className=" my-2 px-2">
              <h1 className="text-[#000] font-bold text-2xl">
                Education and Courses
              </h1>
            </div>
            <div className="flex-wrap px-2 pb-1">
              <div className="flex flex-col items-start md:flex-row md:justify-between ">
                <h1 className="text-[#9E8C6C] font-semibold text-xl">
                  Information technologies
                </h1>
                <label htmlFor="h1" className="italic">
                  2022 - present
                </label>
              </div>
              <div>
                <p className="">Business and Technology University - BTU </p>
              </div>
            </div>

            <div className="flex-wrap px-2 pb-1 my-2">
              <div className="flex flex-col items-start md:flex-row md:justify-between ">
                <h1 className="text-[#9E8C6C] font-semibold text-xl">
                  JavaScript Algorithms and Data Structures
                </h1>
                {/* <label htmlFor="h1" className="italic">
                  2022 - present
                </label> */}
              </div>
              <div>
                <p className="">FreeCodeCamp</p>
              </div>
            </div>

            <div className="flex-wrap px-2 pb-1 my-2">
              <div className="flex flex-col items-start md:flex-row md:justify-between ">
                <h1 className="text-[#9E8C6C] font-semibold text-xl">
                  React - The Complete Guide
                </h1>
                <label htmlFor="h1" className="italic">
                  Maximilian Schwarzmuller
                </label>
              </div>
              <div>
                <p className="">Udemy</p>
              </div>
            </div>

            <div className="flex-wrap px-2 pb-1 my-2">
              <div className="flex flex-col items-start md:flex-row md:justify-between w-full">
                <h1 className="text-[#9E8C6C] font-semibold text-xl w-9/12">
                  100 Days of Code: The Complete Python Pro Bootcamp for 2023
                </h1>
                <label htmlFor="h1" className="italic">
                  Angela Yu
                </label>
              </div>
              <div>
                <p className="">Udemy</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
