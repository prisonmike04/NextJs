import React from "react";
import { delay, motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 0.5, 0.7, 0.8, 1] }}
      className="foot bg-black xl:text-center 2xl:text-center md:text-center lg:text-center sm:text-left text-blue-600 h-20 pt-5"
    >
      &copy; All rights are reserved to DJS Nova
    </motion.div>
  );
};

export default Footer;
