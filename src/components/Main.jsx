import React from "react";
import { Products, Footer, Contact, AboutMob, ProductsMob, Approval, Sales } from ".";
import Certificates from "./Certificates";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Quality from "./Quality";
import Slider from "./Slider";
import About from "./About";
import WhyUs from "./WhyUs";
import Chat from "./Chat";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar textColor="text-white" />
      <div className=""><Slider /></div>
      <div className=""><Products /></div>
      {/* <div className="md:hidden"><ProductsMob /></div> */}
      {/* <Sales /> */}
      <WhyUs />
      <div className=""><About /></div>
      {/* <div className="md:hidden"><AboutMob /></div> */}
      <Certificates />
      <Approval />

      <Quality />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;

