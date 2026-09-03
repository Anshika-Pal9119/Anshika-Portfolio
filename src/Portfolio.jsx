import "./Portfolio.css";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Certificate from "./components/Certificate.jsx";

import bg from "./assets/bg.jpg";

function Portfolio() {
    return (
        <div className="portfolio">

            <img
                className="background"
                src={bg}
                alt="Background"
            />

            <Navbar />

            <section id="hero">
                <Hero />
            </section>

            <section id ="about">
                <About />
            </section>

            <section id ="education">
                <Education />
            </section>

            <section id ="skill">
                <Skill />
            </section>

            <section id="experience">
                <Experience />
            </section>

            

            <section id="project">
                <Project />
            </section>
            
            <section id="certificate">
                <Certificate />
            </section>

            <section id="contact">
                <Contact />
            </section>

        </div>
    );
}

export default Portfolio;