import "./Experience.css"
function ExperienceCard({
    number,
    title,
    organization,
    date,
    description,
    tags
}) {
    return (
        <div className="experience-card">

            {/* Card Header */}
            <div className="experience-top">

                <div>
                    <p className="experience-number">
                        {number}
                    </p>

                    <h2>{title}</h2>

                    <h3>{organization}</h3>
                </div>

                <span className="experience-date">
                    {date}
                </span>

            </div>


            {/* Description */}
            <p className="experience-description">
                {description}
            </p>


            {/* Skills / Tags */}
            <div className="experience-tags">

                {tags.map((tag) => (
                    <span key={tag}>
                        {tag}
                    </span>
                ))}

            </div>

        </div>
    );
}


function Experience() {

    const experienceData = [

        {
            number: "01",
            title: "Hackathon Project Experience",
            organization: "BloodCare — Blood Donation Platform",
            date: "HACKATHON",
            description:
                "Worked as part of a team to develop a blood donation platform. Contributed to the website concept, donor registration and dashboard workflow while exploring Firebase and Google Maps integration.",
            tags: [
                "React",
                "Firebase",
                "Google Maps",
                "Teamwork"
            ]
        },

        {
            number: "02",
            title: "Maths Mania Competition",
            organization: "Mathematics Competition",
            date: "COMPETITION",
            description:
                "Participated in a competitive mathematics quiz and applied quantitative aptitude, logical reasoning and problem-solving skills under time constraints.",
            tags: [
                "Mathematics",
                "Logical Reasoning",
                "Problem Solving",
                "Quick Thinking"
            ]
        },

        {
            number: "03",
            title: "Technical Learning & Workshops",
            organization: "Continuous Learning",
            date: "ONGOING",
            description:
                "Continuously developing technical knowledge through workshops, webinars and hands-on learning in data analytics, data science, prompt engineering, Claude, React and web development.",
            tags: [
                "Data Analytics",
                "Data Science",
                "Prompt Engineering",
                "Claude",
                "React",
                "Web Development"
            ]
        }

    ];


    return (
        <div className="experience-section">

            {/* Section Heading */}

            <div className="experience-heading">

                <p className="experience-label">
                    04 — EXPERIENCE
                </p>

                <h1>
                    Practical <span>Experience</span>
                </h1>

            </div>


            {/* Experience Stack */}

            <div className="experience-list">

                {experienceData.map((item) => (

                    <ExperienceCard
                        key={item.number}
                        number={item.number}
                        title={item.title}
                        organization={item.organization}
                        date={item.date}
                        description={item.description}
                        tags={item.tags}
                    />

                ))}

            </div>

        </div>
    );
}

export default Experience;