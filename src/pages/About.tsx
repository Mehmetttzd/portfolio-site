import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const About: React.FC = () => {
    const navigate = useNavigate(); // For navigating to Contact Page

    const handleContactClick = () => {
        navigate('/contact'); // Navigate to Contact page
    };

    return (
        <div className="about-container">
            {/* Hero Section */}
            <header className="about-hero">
                <h1>About Me</h1>
                <p>
                    I'm a passionate developer with a journey of continuous learning, creativity, and innovation. From education to professional experiences, my goal has always been to create impactful solutions.
                </p>
            </header>

            {/* Roadmap Section */}
            <section className="roadmap">
                <h2 className="roadmap-title">My Journey</h2>
                <div className="timeline">
                    {/* Milestone 1 */}
                    <div className="milestone">
                        <FaGraduationCap className="milestone-icon" />
                        <div className="milestone-content">
                            <h3>Education - Collège LaSalle</h3>
                            <p>
                                Completed a programming-related program, building a strong foundation in software development and problem-solving.
                            </p>
                        </div>
                    </div>

                    {/* Milestone 2 */}
                    <div className="milestone">
                        <FaLaptopCode className="milestone-icon" />
                        <div className="milestone-content">
                            <h3>Internship - DevFortress</h3>
                            <p>
                                Worked as an intern, developing browser extensions and scripts, and collaborating on web development projects.
                            </p>
                        </div>
                    </div>

                    {/* Milestone 3 */}
                    <div className="milestone">
                        <FaBriefcase className="milestone-icon" />
                        <div className="milestone-content">
                            <h3>Work - Pooneh Media</h3>
                            <p>
                                Contributed to web development projects, focusing on building responsive websites and improving user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Let’s Work Together</h2>
                <p>If you're interested in collaborating or have any inquiries, feel free to reach out!</p>
                <button className="cta-button" onClick={handleContactClick}>
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default About;
