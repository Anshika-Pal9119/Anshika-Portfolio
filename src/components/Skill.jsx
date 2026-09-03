import "./Skill.css";
function SkillCard({ icon, title, description, skills }) {
    return (
        <div className="skill-card">

            <div className="skill-icon">
                {icon}
            </div>

            <h2>{title}</h2>

            <p className="skill-description">
                {description}
            </p>

            <div className="skill-divider"></div>

            <div className="skill-list">
                {skills.map((skill) => (
                    <span key={skill}>
                        {skill}
                    </span>
                ))}
            </div>

        </div>
    );
}


function Skill() {

    const skillData = [
        {
            icon: "⚡",
            title: "SOFT SKILLS",
            description:
                "Interpersonal and professional skills that help me work effectively with people and teams.",
            skills: [
                "Team Management",
                "Communication Skills",
                "Problem Solving",
                "Critical Thinking"
            ]
        },

        {
            icon: "💻",
            title: "TECHNICAL SKILLS",
            description:
                "Programming and technical skills developed through academic learning and practical practice.",
            skills: [
                "C Programming",
                "C++",
                "DSA",
                "Python",
                "Power BI",
                "Prompt Engineering"
            ]
        },

        {
            icon: "◈",
            title: "THEORETICAL SKILLS",
            description:
                "Foundational knowledge of computing concepts and emerging technologies.",
            skills: [
                "Emerging Technology",
                "Operating System",
                "Professional Communication"
            ]
        }
    ];


    return (
        <div className="skill-section">

            {/* Heading */}

            <div className="skill-heading">

                <p className="skill-label">
                    03 — SKILLS
                </p>

                <h1>
                    What I <span>Know</span>
                </h1>

            </div>


            {/* Three Skill Panels */}

            <div className="skill-panels">

                {skillData.map((skill) => (
                    <SkillCard
                        key={skill.title}
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                        skills={skill.skills}
                    />
                ))}

            </div>

        </div>
    );
}

export default Skill;