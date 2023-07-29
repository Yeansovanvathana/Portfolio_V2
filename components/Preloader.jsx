import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const part1Controls = useAnimation();
  const part2Controls = useAnimation();

  useEffect(() => {
    const delayPart1AndPart2 = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delayPart1AndPart2);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      part1Controls.start({ y: "-100%" });
      part2Controls.start({ y: "100%" });
    }
  }, [isLoading, part1Controls]);

  return (
    <div>
      <Head>
        <title>Vathana | Portfolio</title>
        <link rel="icon" href="/Icons/icon (2).png" type="image/x-icon" />
      </Head>
      <div className="overlay">
        <motion.div
          className={`part1  dark:bg-primary-100 bg-gray-800`}
          id="part1-id"
          animate={part1Controls}
          initial={{ y: 0 }} // Add initial position for animation
          transition={{ duration: 0.8 }}
        />
        {isLoading && (
          <>
            {/* <div className="loader" id="loader-id" /> */}
            <div className="overlay flex items-center justify-center">
              <motion.div
                className="dark:bg-gray-800 bg-primary-100 h-2 w-1/2"
                initial={{ width: "20%" }}
                animate={{
                  width: ["20%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.5,
                }}
              />
            </div>
          </>
        )}
        <motion.div
          className={`part2  dark:bg-primary-100 bg-gray-800`}
          id="part2-id"
          animate={part2Controls}
          initial={{ y: 0 }} // Add initial position for animation
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Preloader;
