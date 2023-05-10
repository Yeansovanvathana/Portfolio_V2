import Head from "next/head";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import { Design } from "@/components/Design";

export default function Home() {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll">
      <Head>
        <title>Vathana Portfolio</title>
      </Head>
      <section className="snap-start bg-primary-100 rounded-bl-[100px] md:h-screen">
        <Header />
        {/* Header */}
        <Page />
        {/* Page */}
      </section>
      <section className="snap-start h-screen">
        <Design />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Project */}

      {/* Contact Me/ */}
    </div>
  );
}
