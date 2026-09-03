import mathMania from "../assets/math-mania.png";
import allenTalk from "../assets/allentalk.png";
import exuberance from "../assets/exuberance.png";
import hackathon from "../assets/hackathon.png";
import "./Certificate.css"

function CertificateCard({
    type,
    title,
    organization,
    date,
    description,
    certificate
}) {
    return (
        <div className="certificate-card">

            <div className="certificate-content">

                <p className="certificate-type">
                    {type}
                </p>

                <h2>
                    {title}
                </h2>

                <p className="certificate-organization">
                    {organization}
                </p>

                <p className="certificate-date">
                    {date}
                </p>

                <p className="certificate-description">
                    {description}
                </p>


                {/* View Certificate Button */}

                <a
                    href={certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate"
                >
                    ↗ &nbsp; VIEW CERTIFICATE
                </a>

            </div>

        </div>
    );
}


function Certificate() {

    const certificates = [

        {
            type: "🏆 WINNER",
            title: "Math Mania 2026",
            organization: "Allenhouse Business School",
            date: "22 August 2026",
            description:
                "Winner in Math Mania 2026, demonstrating strong mathematical ability, quick thinking and problem-solving skills.",
            certificate: mathMania
        },


        {
            type: "🎤 PARTICIPATION",
            title: "AllenTalk 4.0",
            organization: "Allenhouse Business School",
            date: "27 December 2025",
            description:
                "Participated in AllenTalk 4.0, a platform encouraging students to express ideas, communicate and showcase their thinking.",
            certificate: allenTalk
        },


        {
            type: "⭐ VOLUNTEERING",
            title: "Exuberance-26",
            organization: "Allenhouse Group of Institutions",
            date: "February 2026",
            description:
                "Received appreciation for volunteering and contributing time and effort during Exuberance-26.",
            certificate: exuberance
        },


        {
            type: "💻 HACKATHON",
            title: "Hackathon 2.0",
            organization: "Allenhouse Business School",
            date: "17–18 March 2026",
            description:
                "Participated in an inter-college application development hackathon focused on creating solutions for society wellness.",
            certificate: hackathon
        }

    ];


    return (

        <div className="certificate-section">

            {/* Heading */}

            <div className="certificate-heading">

                <p className="certificate-label">
                    06 — RECOGNITION
                </p>

                <h1>
                    Achievements & <span>Certifications</span>
                </h1>

                <div className="heading-line"></div>

            </div>


            {/* Statistics */}

            <div className="certificate-stats">

                <div className="certificate-stat">
                    <span className="stat-dot gold"></span>
                    <strong>1</strong>
                    <p>AWARD</p>
                </div>

                <div className="certificate-stat">
                    <span className="stat-dot green"></span>
                    <strong>3</strong>
                    <p>CERTIFICATES</p>
                </div>

                <div className="certificate-stat">
                    <span className="stat-dot purple"></span>
                    <strong>4</strong>
                    <p>RECOGNITIONS</p>
                </div>

            </div>


            {/* Certificate Cards */}

            <div className="certificate-grid">

                {certificates.map((certificate) => (

                    <CertificateCard
                        key={certificate.title}
                        type={certificate.type}
                        title={certificate.title}
                        organization={certificate.organization}
                        date={certificate.date}
                        description={certificate.description}
                        certificate={certificate.certificate}
                    />

                ))}

            </div>

        </div>

    );
}

export default Certificate;