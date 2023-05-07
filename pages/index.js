import Head from "next/head";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vathana Portfolio</title>
      </Head>
      <section className="bg-primary-100 rounded-bl-[100px]">
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
