"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FileUpload, Plagiarism } from "@mui/icons-material";

const FeaturesTwo = () => {
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
          className="max-w-3xl mx-auto text-center text-4xl text-indigo-900 font-bold mt-5"
        >
          Powerful Features !
        </motion.p>
        <br />
        <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto text-center">
          Fed up with scrolling through pages of search results? Our
          source-finding tool simplifies the process so you can find your
          sources quickly and easily
        </p>
        <br />
        <div className="grid grid-cols1 md:grid-cols-2 text-center p-3 gap-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
          >
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
              alt="Thumb"
              className="w-full mx-auto rounded-3xl"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Paste Your Essay
            </h2>
            <p className="font-light text-gray-700">
              Save time and effort by quickly getting a general overview/summery
              of a source material
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
          >
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
              alt="Thumb"
              className="w-full mx-auto rounded-3xl"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Paste Your Essay
            </h2>
            <p className="font-light text-gray-700">
              Save time and effort by quickly getting a general overview/summery
              of a source material
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
          >
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
              alt="Thumb"
              className="w-full mx-auto rounded-3xl"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Paste Your Essay
            </h2>
            <p className="font-light text-gray-700">
              Save time and effort by quickly getting a general overview/summery
              of a source material
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
          >
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
              alt="Thumb"
              className="w-full mx-auto rounded-3xl"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Paste Your Essay
            </h2>
            <p className="font-light text-gray-700">
              Save time and effort by quickly getting a general overview/summery
              of a source material
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesTwo;
