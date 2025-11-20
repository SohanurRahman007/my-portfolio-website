import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
const Home = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
