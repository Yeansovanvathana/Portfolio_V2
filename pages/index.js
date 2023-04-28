import Head from "next/head";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";

export default function Home() {
  return (
    <div className="bg-{#DAD9D5}">
      <Head>
        <title>Vathana Portfolio</title>
      </Head>
      <section className=" bg-red-100">
        <Header />
        {/* Header */}
        <Page />
        {/* Page */}
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Project */}

      {/* Contact Me/ */}
    </div>
  );
}
