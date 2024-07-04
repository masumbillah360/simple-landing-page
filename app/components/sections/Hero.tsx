"use client";

import React from "react";
import { SlowMotionVideo } from "@mui/icons-material";
import NewFeature from "../ui/NewFeature";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
  },
};
const Hero = () => (
  <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto sm:max-w-xl md:max-w-4xl">
        <div className="text-center">
          <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
            <div>
              <NewFeature />
            </div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="text-3xl font-bold leading-none tracking-tight text-indigo-900"
            >
              Academic Source <br />
              Summarization with AI Power
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
                bounceDamping: 10,
                bounceStiffness: 600,
              }}
              className="text-base text-gray-700 md:text-lg mx-auto"
            >
              Discover reliable sources effortlessly with our AI-Powered Tool.
              Watch our video demo or start generating now, for free!
            </motion.p>

            <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto my-10 flex flex-row justify-center gap-5">
              <motion.button
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3,
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black border border-base-100 transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <SlowMotionVideo />
                Demo
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3,
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black border border-base-100 transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Start Now. It&apos;s Free!
              </motion.button>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 w-full mb-4 md:px-16"
          >
            <div className="flex -space-x-2">
              <a
                href="/"
                className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500"
              >
                <img
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-white"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                  alt="Guy"
                />
              </a>
              <a
                href="/"
                className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500"
              >
                <img
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-white"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                  alt="Guy"
                />
              </a>
              <a
                href="/"
                className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500"
              >
                <img
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-white"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                  alt="Guy"
                />
              </a>
              <a
                href="/"
                className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500"
              >
                <img
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-white"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                  alt="Guy"
                />
              </a>
            </div>
            <span className="">Saving students 1000+ hours of research</span>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.1,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="max-w-3xl mx-auto mt-24 mb-10 text-4xl text-gray-600 font-bold"
          >
            Trusted by students from top colleges
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.1,
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto"
          >
            Why trust us? Because we are trusted by the absolute best academic
            institutions. including Harvard, MIT, and Stanford, among teachers.
          </motion.p>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
