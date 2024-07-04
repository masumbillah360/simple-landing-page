"use client";

import { FileUpload, Plagiarism, PlagiarismRounded, PlagiarismTwoTone } from "@mui/icons-material";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Features = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="max-w-3xl mx-auto text-center text-4xl text-indigo-900 font-bold mt-40"
        >
          Watch Our Demo
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.3,
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
          className="max-w-3xl mx-auto text-center text-4xl text-indigo-900 font-bold mt-40"
        >
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
            alt="Thumb"
            className="rounded-2xl"
          />
        </motion.p>
        <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto my-10 flex flex-row justify-center gap-5">
          <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Start Now, It&apos;s Free!
          </button>
        </p>
        <br />
        <br />
        <br />
        <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto my-10 flex flex-row justify-center gap-5">
          <span className="bg-white px-4 pt-3 pb-1 border border-base-200 shadow-lg rounded-lg flex flex-row justify-center">
            <button className="w-1 h-1 bg-blue-700 rounded-full mr-3 my-auto animate-pulse"></button>
            <span className="my-auto animate-bounce">Try It Now!</span>
          </span>
        </p>
        <p className="max-w-3xl mx-auto text-center text-4xl text-indigo-900 font-bold">
          Try our easy-to-use tool now and see the magic for yourself!
        </p>
        <br />
        <div className="flex justify-center">
          <textarea
            className="w-[90%] md:w-[70%] lg:w-[75%] p-4 md:p-10 h-[250px] lg:h-[300px] mx-auto rounded-2xl  border-indigo-500 border-2 text-xl"
            name=""
            id=""
          />
        </div>
        <br />

        <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto my-10 flex flex-row justify-center gap-5">
          <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            <Plagiarism className="mr-2" />
            Find Sources
          </button>
          <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            <FileUpload className="mr-2" />
           Upload Text File
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Features;
