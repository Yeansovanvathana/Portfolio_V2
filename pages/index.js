import Head from "next/head";
import { useState, useEffect } from "react";
import { Page } from "@/components/Page";
import { Design } from "@/components/Design";
import { Navbar } from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import DotGroup from "@/components/DotGroup";
import LineGradient from "@/components/LineGradient";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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
    <div className="h-full w-screen overflow-scroll bg-primary-100 ">
      <Head>
        <title>Vathana Portfolio</title>
      </Head>

      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Page />
        </motion.div>
      </div>

      {/* <LineGradient /> */}

      <div className="mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Design />
        </motion.div>
      </div>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Project */}

      {/* Contact Me/ */}
    </div>
  );
}
