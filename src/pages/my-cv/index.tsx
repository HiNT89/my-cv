import Seo from "@/components/seo";
import React from "react";
import Header from "./components/header";
import { Banner } from "./components/banner";
import Technology from "./components/technology";
export default function MyCV() {
  return (
    <>
      <Seo />
      <main className="my-cv" style={{ backgroundColor: "#000" }}>
        <section>
          <Header />
        </section>
        <section>
          <Banner />
        </section>
        <section>
          <Technology />
        </section>
      </main>
    </>
  );
}
