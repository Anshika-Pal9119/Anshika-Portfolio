import "./About.css";

function About() {
    return (
        <section className="about-section">

            {/* LEFT SIDE */}
            <div className="about-content">

                <div className="about-label">
                    -- 01 - ABOUT
                </div>

                <h1 className="about-title">
                    Who I <span>Am</span>
                </h1>

                <div className="about-line"></div>

                <p className="about-text">
                    I am a cheerful, approachable and goal-oriented
                    individual who believes in creating a positive
                    environment wherever I work. I naturally take
                    initiative in team settings and enjoy coordinating
                    with others, sharing ideas and appreciating the
                    contributions of my teammates.
                </p>

                <p className="about-text">
                    I am passionate about my career and always strive
                    to learn, improve and give my best to every task
                    I undertake.
                </p>

                <p className="about-text">
                    My goal is to become a Data Analyst, with a strong
                    interest in data visualization and working with
                    large datasets. I aspire to bridge the gap between
                    raw data and meaningful insights.
                </p>

            </div>


            {/* RIGHT SIDE - STATS */}
            <div className="about-stats">

                <div className="stat-card stat-gold">
                    <div className="stat-icon">✦</div>

                    <h2>9.6</h2>

                    <p>SGPA</p>
                </div>


                <div className="stat-card stat-purple">
                    <div className="stat-icon">◆</div>

                    <h2>9.2</h2>

                    <p>CGPA</p>
                </div>


                <div className="stat-card stat-teal">
                    <div className="stat-icon">★</div>

                    <h2>5</h2>

                    <p>Achievements</p>
                </div>


                <div className="stat-card stat-gold">
                    <div className="stat-icon">in</div>

                    <h2>500+</h2>

                    <p>LinkedIn Connections</p>
                </div>

            </div>

        </section>
    );
}

export default About;