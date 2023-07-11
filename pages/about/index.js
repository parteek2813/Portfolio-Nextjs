import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiTypescript,
  SiExpress,
  SiSequelize,
  SiPostman,
  SiRabbitmq,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";

import { BiLogoNodejs } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";

// componenets
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaJava />,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          <BiLogoNodejs />,
          <SiExpress />,
          <SiSequelize />,
          <SiPostman />,
          <SiRabbitmq />,
          <SiMongodb />,
        ],
      },
      {
        title: "Developer Tools",
        icons: [<SiGit />, <SiGithub />],
      },
      {
        title: "Other",
        icons: [<SiMysql />, <TbBrandCpp />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Panjab University, Hoshiarpur ",
        stage: "2020 - 2024",
        standard: "BE (IT)",
        marks: "8.30/10 CGPA",
      },
      {
        title: "Satyanand Public School, Gohana",
        stage: "2019 - 2020",
        standard: "Class 12th (PCM)",
        marks: "91.4%",
      },
      {
        title: "Satyanand Public School, Gohana",
        stage: "2017 - 2018",
        standard: "Class 10th",
        marks: "92%",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "App Development",
        stage: "Andrew Ng- Coursera",
      },
      {
        title: "Neural Networks and Machine learning",
        stage: "Rinex.AI",
      },
      {
        title: "Google cloud - Qwik Labs",
        stage: "Google cloud",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left  ">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        className=" xl:flex absolute bottom-0 -left-[370px]"
      >
        <Image src={"/avatar.png"} width={737} height={678}></Image>
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-[50px]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            🌟 Master of <span className="text-accent">Frontend Sorcery</span>{" "}
            Unleashing Digital Wizardry 🚀
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 xl:px-0"
          >
            <div className="text-lg text-rose-200	mt-2  ">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product.
            </div>
            <div className=" text-lg text-rose-200 mt-6 ">
              I navigate the celestial highways of HTML, CSS, and JavaScript
              with cosmic ease, harnessing the power of cutting-edge frameworks
              like React & Angular. My toolbelt is adorned with celestial gems
              such as SASS, Bootstrap, and Tailwind CSS, ensuring your websites
              are as visually stunning as a celestial tapestry.
            </div>
          </motion.p>

          {/* counters */}

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  2024
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Passing Year
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom container-title-subtitle-icons */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-[50px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="flex  flex-col mt-2">
                    <div className="flex flex-row ">
                      <div className="font-light mb-2  md:mb-0 ">
                        {item.title}
                      </div>
                      <div className="hidden md:flex">-</div>
                      <div className="ml-3"> {item.stage} </div>
                    </div>

                    <div className="flex flex-row ">
                      <div className="font-light mb-2  md:mb-0">
                        {item.standard}
                      </div>
                      <div className="ml-3 font-bold"> {item.marks} </div>
                    </div>
                  </div>

                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
