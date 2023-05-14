import Head from "next/head";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
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
    <div className="snap-y snap-proximity h-full w-screen overflow-scroll bg-primary-100 ">
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

      <LineGradient />
      <div className="mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Design />
        </motion.div>
      </div>
      {/* <section className="snap-start placeholder:md:h-auto"> */}
      {/* <Header /> */}
      {/* Header */}
      {/* <Page /> */}
      {/* Page */}
      {/* </section>
      <div className="text-xl bg-secondary-100 w-full h-2"></div>
      <section className="snap-start h-screen">
        <Design />
      </section> */}

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Project */}

      {/* Contact Me/ */}
    </div>
  );
}
