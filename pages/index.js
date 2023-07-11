// next image
import Image from "next/image";
import styles from "../styles/pages.module.css";

// next link
import Link from "next/link";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import React from "react";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import { useEffect, useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const title = "I'm a".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const liVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              <div className={styles.wrapper}>
                <div className={styles.static}>
                  {title.map((letter, index) => {
                    return <span key={index}>{letter}</span>;
                  })}
                </div>
                <ul className={styles.dynamic}>
                  <motion.li
                    className={`${styles.stackedLi} ${
                      activeIndex === 0 ? styles.active : ""
                    }`}
                    variants={liVariants}
                    initial="hidden"
                    animate={activeIndex === 0 ? "show" : "hidden"}
                  >
                    <span>Frontend Developer</span>
                  </motion.li>
                  <motion.li
                    className={`${styles.stackedLi} ${
                      activeIndex === 1 ? styles.active : ""
                    }`}
                    variants={liVariants}
                    initial="hidden"
                    animate={activeIndex === 1 ? "show" : "hidden"}
                  >
                    <span>Passionate Coder</span>
                  </motion.li>
                  <motion.li
                    className={`${styles.stackedLi} ${
                      activeIndex === 2 ? styles.active : ""
                    }`}
                    variants={liVariants}
                    initial="hidden"
                    animate={activeIndex === 2 ? "show" : "hidden"}
                  >
                    <span>Web designer</span>
                  </motion.li>
                </ul>
              </div>
              <div className="text-[29px] mt-10 font-bold">
                Transforming Ideas Into
                <span className="text-accent"> Digital Reality</span>
              </div>
            </motion.h2>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 mt-2 text-justify"
            >
              🎯 Motivated and adaptable technology enthusiast driven by the
              pursuit of new possibilities in diverse tech environments.
              <br />
              <br />
              🚀 Proficient in web development, focused on problem-solving and
              driven by innovation.
            </motion.p>

            {/* btns */}
            <div className="flex flex-row">
              <div className="flex  justify-center xl:hidden relative">
                <ProjectsBtn />
              </div>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex"
              >
                <ProjectsBtn />
              </motion.div>

              <div className="m-[60px] ">
                <Link
                  className="hover:bg-gray-700 text-[#64ffda] hover:text-[#64ffda] hover:text-gray-900 hover:border-gray-100"
                  style={{
                    border: "0.8px solid rgb(100, 255, 218)",
                    borderRadius: "4px",
                    padding: "12px 16px",

                    fontFamily:
                      '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                    lineHeight: "13px",
                    textDecoration: "none solid rgb(100, 255, 218)",
                    transition:
                      "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                    fontSize: "13px",
                    display: "inline-block",
                    position: "relative",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                  href={"/resume.pdf"}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-[1000px] h-full absolute right-0 bottom-0">
          {/* bg image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <div>
            {/* particles */}
            <ParticlesContainer />
            {/* avatar image */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full max-w-[587px] max-h-[528px] absolute -bottom-32  lg:bottom-0 lg:right-[5%]"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
