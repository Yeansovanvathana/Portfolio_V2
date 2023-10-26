import Head from "next/head";
import { useState, useEffect } from "react";
import { Page } from "@/components/Page";
import { Design } from "@/components/Design";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
// import DotGroup from "@/components/DotGroup";
import { Skillset } from "@/components/Skillset";
import { Project } from "@/components/Project";
import { About } from "@/components/About";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Vathana | Portfolio</title>
        <link rel="icon" href="/Icons/icon (2).png" type="image/x-icon" />
      </Head>

      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="">
        {/* {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )} */}

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Page />
        </motion.div>
      </div>

      {/* <LineGradient /> */}
      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skillset />
        </motion.div>
      </div>

      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("design")}
        >
          <Design />
        </motion.div>
      </div>

      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Project />
        </motion.div>
      </div>

      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About />
        </motion.div>
      </div>

      {/* About */}

      {/* Experience */}

      {/* Project */}

      {/* Contact Me/ */}
    </div>
  );
}
