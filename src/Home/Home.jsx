import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
