import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, easeInOut, motion } from "framer-motion";

//react
import { useState, useEffect } from "react";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // console.log(mousePosition);

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const cursorVariants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  // };

  return (
    <>
      <Layout>
        {/* <motion.div
          whileHover={{ scale: 1.4 }}
          variants={cursorVariants}
          animate="default"
          className=""
        >
          <Image src={"./cursor.svg"} width={48} height={48} />
        </motion.div> */}
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
