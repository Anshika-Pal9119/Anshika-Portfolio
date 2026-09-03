import "./Contact.css"
function Contact() {

    return (

        <div className="contact-section">

            {/* Left Side */}

            <div className="contact-left">

                <p className="contact-label">
                    08 — CONTACT
                </p>

                <h1>
                    Let's <span>Connect</span>
                </h1>

                <div className="contact-line"></div>

                <div className="contact-banner">
                    🚀 &nbsp; OPEN TO INTERNSHIP & FREELANCE OPPORTUNITIES
                </div>

                <p className="contact-description">
                    I am open to internship opportunities, collaborative
                    projects and meaningful conversations around technology,
                    data analytics and web development.
                </p>

            </div>


            {/* Right Side */}

            <div className="contact-details">

                {/* Gmail */}

                <a
                    href="mailto:anshikapal9030@gmail.com"
                    className="contact-card"
                >

                    <div className="contact-icon">
                        ✉
                    </div>

                    <div>
                        <p>EMAIL</p>
                        <h3>anshikapal9030@gmail.com</h3>
                    </div>

                    <span className="contact-arrow">
                        ↗
                    </span>

                </a>


                {/* LinkedIn */}

                <a
                    href="https://www.linkedin.com/in/anshika-pal-a09722385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >

                    <div className="contact-icon">
                        in
                    </div>

                    <div>
                        <p>LINKEDIN</p>
                        <h3>Connect with me</h3>
                    </div>

                    <span className="contact-arrow">
                        ↗
                    </span>

                </a>


                {/* Mobile */}

                <a
                    href="tel:+919119654062"
                    className="contact-card"
                >

                    <div className="contact-icon">
                        ☎
                    </div>

                    <div>
                        <p>PHONE</p>
                        <h3>+91 9119654062</h3>
                    </div>

                    <span className="contact-arrow">
                        ↗
                    </span>

                </a>

            </div>

        </div>

    );
}

export default Contact;