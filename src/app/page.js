import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Contacts from "./contact/page";

export default function Page() {
  return (
    <>
      <section id="#">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </>
  );
}
