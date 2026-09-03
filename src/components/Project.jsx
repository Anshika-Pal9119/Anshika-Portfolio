import "./Project.css"
function ProjectCard({
    icon,
    category,
    title,
    description,
    tags
}) {
    return (
        <div className="project-card">

            {/* Project Icon */}
            <div className="project-icon">
                {icon}
            </div>

            {/* Project Content */}
            <div className="project-content">

                <p className="project-category">
                    {category}
                </p>

                <h2>
                    {title}
                </h2>

                <p className="project-description">
                    {description}
                </p>

                {/* Technology / Project Tags */}
                <div className="project-tags">

                    {tags.map((tag) => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))}

                </div>

            </div>

        </div>
    );
}


function Project() {

    const projectData = [

        /* 01 - BloodCare */
        {
            icon: "🩸",
            category: "HEALTHCARE / WEB DEVELOPMENT",
            title: "BloodCare",
            description:
                "A blood donation platform designed to connect donors with people in need and simplify the donor registration and management process.",
            tags: [
                "React",
                "Firebase",
                "Google Maps"
            ]
        },


        /* 02 - MediSync */
        {
            icon: "🏥",
            category: "HEALTHCARE / WEB APPLICATION",
            title: "MediSync",
            description:
                "A healthcare-focused project designed to improve patient coordination and simplify the management of healthcare-related information.",
            tags: [
                "Web Development",
                "Healthcare",
                "Database"
            ]
        },


        /* 03 - Scientific Calculator */
        {
            icon: "🧮",
            category: "WEB DEVELOPMENT / JAVASCRIPT",
            title: "Scientific Calculator",
            description:
                "A scientific calculator application supporting mathematical operations and functions through an interactive and user-friendly interface.",
            tags: [
                "JavaScript",
                "HTML",
                "CSS"
            ]
        },


        /* 04 - Data Analysis Dashboard */
        {
            icon: "📊",
            category: "DATA ANALYTICS / DATA VISUALIZATION",
            title: "Data Analysis & Dashboard",
            description:
                "Worked with large datasets to analyze information, identify meaningful patterns and transform raw data into key insights through an interactive dashboard.",
            tags: [
                "Data Analytics",
                "Data Visualization",
                "Power BI",
                "Large Datasets"
            ]
        },


        /* 05 - Dynamic Day Planner */
        {
            icon: "📅",
            category: "WEB DEVELOPMENT / PRODUCTIVITY",
            title: "Dynamic Day Planner",
            description:
                "A dynamic day-planning application designed to help users organize daily tasks, manage schedules and keep track of their activities efficiently.",
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "Web Development"
            ]
        },


        /* 06 - MedComp */
        {
            icon: "💊",
            category: "HEALTHCARE / WEB DEVELOPMENT",
            title: "MedComp",
            description:
                "A healthcare-focused project created to simplify access to medical information and support users in managing healthcare-related needs.",
            tags: [
                "Web Development",
                "Healthcare",
                "Database"
            ]
        }

    ];


    return (
        <div className="project-section">

            {/* Section Heading */}

            <div className="project-heading">

                <p className="project-label">
                    05 — PROJECTS
                </p>

                <h1>
                    What I <span>Built</span>
                </h1>

            </div>


            {/* Project Cards */}

            <div className="project-grid">

                {projectData.map((project) => (

                    <ProjectCard
                        key={project.title}
                        icon={project.icon}
                        category={project.category}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                    />

                ))}

            </div>

        </div>
    );
}

export default Project;