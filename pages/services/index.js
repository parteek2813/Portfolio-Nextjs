// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Footer from "../../components/Footer";

const Services = () => {
  return (
    <>
      <div className="h-full bg-primary/30 py-36 flex items-center ">
        <Circles />
        <div className="container mx-auto overflow-hidden">
          <div className="flex  xl:flex-row gap-x-0">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8 "
              >
                My services <span className="text-accent"></span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 mt-4 "
              >
                These are some of the technologies I love to <br /> dive deep
                into and explore:
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full h-[100%] xl:max-w-[65%] "
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
      <Footer />
    </>
  );
};

export default Services;
