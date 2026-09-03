import "./Education.css";
function TimelineCard({
    number,
    category,
    title,
    institute,
    year,
    status
}) {
    return (
        <div className="timeline-item">

            {/* Timeline Dot */}
            <div className="timeline-dot"></div>

            {/* Timeline Card */}
            <div className="timeline-card">

                <p className="timeline-category">
                    {category}
                </p>

                <h2>{title}</h2>

                <h3>{institute}</h3>

                <div className="timeline-info">

                    {year && (
                        <span>
                            {year}
                        </span>
                    )}

                    {status && (
                        <span className="timeline-status">
                            {status}
                        </span>
                    )}

                </div>

            </div>

        </div>
    );
}


function Education() {

    /* ---------- EDUCATION PROPS ---------- */

    const educationData = [

        {
            number: "01",
            category: "BACHELOR OF COMPUTER APPLICATIONS",
            title: "Bachelor of Computer Applications",
            institute: "Allenhouse Business School",
            year: "2025 - 2028",
            status: "CGPA 9.2"
        },

        {
            number: "02",
            category: "DATA ANALYTICS",
            title: "Enrolled in Data Analytics",
            institute: "from Code with Harry",
            year: "Currently Learning",
            status: "ONGOING"
        },

        {
            number: "03",
            category: "REACT TRAINING",
            title: "React Training",
            institute: "Exploring Knowledge in Web Development",
            year: "Currently Learning",
            status: "ONGOING"
        },

        {
            number: "04",
            category: "INTERMEDIATE",
            title: "Intermediate",
            institute: "SVM Inter College",
            year: "Completed"
        }

    ];


    /* ---------- KEY COURSES ---------- */

    const courses = [
        "Data Analytics",
        "Data Science",
        "Prompt Engineering",
        "Claude Workshop",
        "Web Development",
        "React",
        "Webinars"
    ];


    return (

        <div className="education-section">

            {/* ================= LEFT SIDE ================= */}

            <div className="education-left">

                <h3 className="section-number">02-Education</h3>

                <h1>
                    My Background
                </h1>

                <p className="education-location">
                    📍 Kanpur, Uttar Pradesh
                </p>

                <div className="education-year">
                    2025 - 2028 (Expected)
                </div>


                {/* Current Status */}

                <div className="current-status">

                    <p className="status-label">
                        CURRENT STATUS
                    </p>

                    <h2>
                        3rd Semester
                    </h2>

                    <p className="status-cgpa">
                        CGPA 9.2
                    </p>

                </div>


                {/* Key Courses */}

                <div className="key-courses">

                    <p className="courses-label">
                        KEY COURSES & LEARNING
                    </p>

                    <div className="course-tags">

                        {courses.map((course) => (
                            <span key={course}>
                                {course}
                            </span>
                        ))}

                    </div>

                </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="education-right">

                <p className="timeline-heading">
                    LEARNING TIMELINE
                </p>


                <div className="timeline">

                    {educationData.map((item) => (

                        <TimelineCard
                            key={item.number}
                            number={item.number}
                            category={item.category}
                            title={item.title}
                            institute={item.institute}
                            year={item.year}
                            status={item.status}
                        />

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Education;