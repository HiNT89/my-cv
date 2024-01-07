import React from "react";
import Header from "./components/header";
import { Banner } from "./components/banner";
import Technology from "./components/technology";
import Projects from "./components/project";
import Footer from "./components/footer";
import Seo from "../../components/seo";
export default function MyCV() {
  return (
    <>
      <Seo />
      <main className="my-cv" style={{ backgroundColor: "#000" }}>
        <Header />
        <section id="about">
          <Banner />
        </section>
        <section id="teach-stack">
          <Technology />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}
