import { TypeAnimation } from "react-type-animation";
import Anshika from "../assets/Anshika.jpeg";
import "./Hero.css"
function Hero() {
    return (
        <section className="hero">

            {/* LEFT SIDE */}
            <div className="hero-content">

                {/* Availability Badge */}
                <div className="availability">
                    <span className="status-dot"></span>
                    AVAILABLE FOR OPPORTUNITIES
                </div>

                {/* Name */}
                <h1 className="hero-name">
                    <span className="name-white">Anshika</span>
                    <span className="name-gold">Pal</span>
                </h1>

                {/* Animated Text */}
                <div className="animated-text">
                    <span className="lightning">✦</span>

                    <TypeAnimation
                        sequence={[
                            "Keen Learner",
                            2000,
                            "Problem Solver",
                            2000,
                            "Data Enthusiast",
                            2000,
                            "Future Data Analyst",
                            2000
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                {/* Description */}
                <p className="hero-description">
                    Bachelor of Computer Applications student at
                    <strong> Allenhouse Business School</strong>,
                    passionate about <strong>Data Analysis</strong>,
                    technology and creating meaningful insights from data.
                </p>

                {/* Buttons */}
                <div className="hero-buttons">
                    <a href="#Project" className="hero-btn primary-btn">
                        VIEW PROJECTS
                    </a>

                    <a href="#Contact" className="hero-btn secondary-btn">
                        CONTACT ME
                    </a>
                </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="hero-image-container">

                <div className="image-frame">
                    <img
                        className="anshika"
                        src={Anshika}
                        alt="Anshika Pal"
                    />
                </div>

                {/* Floating CGPA Card */}
                <div className="cgpa-card">
                    <span className="cgpa-value">9.2</span>
                    <span className="cgpa-label">CURRENT CGPA</span>
                </div>

            </div>

        </section>
    );
}

export default Hero;