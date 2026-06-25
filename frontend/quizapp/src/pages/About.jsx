import "../css/About.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";

function About() {

    const navigate = useNavigate();

    return (

        <div className="about">

            <div className="about-card">

                <div className="profile">

                    <img
                            src={profile}
                            alt="Profile"
                            className="profile-img"
                        />

                    <h1>Gaurav Kaushik</h1>

                    <h3>Java Full Stack Developer</h3>

                </div>

                <div className="info">

                    <h2>About Me</h2>

                    <p>
                        Hello! I am <b>Gaurav Kaushik</b>, currently pursuing
                        <b> B.Tech CSE (3rd Year)</b> from
                        <b> IIMT University Meerut.</b>

                        I am passionate about Java Full Stack Development
                        and continuously learning modern technologies.
                    </p>

                    <h2>Skills</h2>

                    <ul>

                        <li>☕ Core Java</li>
                        <li>☕ Advance Java</li>
                        <li>🌱 Spring Boot</li>
                        <li>⚛ React JS</li>
                        <li>🗄 PostgreSQL</li>
                        <li>🌐 HTML, CSS, JavaScript</li>
                        <li>📂 Git & GitHub</li>

                    </ul>

                    <h2>Project</h2>

                    <p>
                        <b>NPTEL Quiz Portal</b>

                        <br />

                        Online quiz platform where students can
                        practice NPTEL questions category-wise,
                        submit quizzes and check scores.
                    </p>

                    <h2>Contact</h2>

    
                    <a href="mailto:gauravkaushik882@gmail.com">
                     📧 contect me
                      </a>

                    <p>📍 Meerut, Uttar Pradesh</p>

                    <button
                        className="backBtn"
                        onClick={() => navigate("/dashboard")}
                    >
                        ← Back to Dashboard
                    </button>

                </div>

            </div>

        </div>

    );

}

export default About;