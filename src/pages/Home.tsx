import React from 'react';
import './Home.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            {/* Sidebar Toolbar */}
            <div className="sidebar">
                <h1 className="portfolio-title">MY PORTFOLIO</h1>
                <ul className="nav-links">
                    <li>
                        <a href="/">
                            <FaHome /> Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <FaUser /> About
                        </a>
                    </li>
                    <li>
                        <a href="/experience">
                            <FaBriefcase /> Experience
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            <FaEnvelope /> Contact
                        </a>
                    </li>
                </ul>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="home-content">
                <div className="hero-section">
                    {/* Intro Text */}
                    <div className="intro-text">
                        <h1>Welcome to My Portfolio</h1>
                        <p>
                            I’m Mohammad Yazdkhasti, a passionate software developer focused on creating
                            innovative and efficient solutions. Let’s build something extraordinary together!
                        </p>
                    </div>

                    {/* Decorative Icons */}
                    <div className="icon-grid">
                        <div className="icon-box">
                            <FaCode className="icon" />
                            <h3>Clean Code</h3>
                            <p>Building scalable, readable, and efficient solutions.</p>
                        </div>
                        <div className="icon-box">
                            <FaLaptopCode className="icon" />
                            <h3>Web Development</h3>
                            <p>Crafting modern, responsive web applications.</p>
                        </div>
                        <div className="icon-box">
                            <FaRocket className="icon" />
                            <h3>Innovation</h3>
                            <p>Driving projects with creativity and technical expertise.</p>
                        </div>
                        <div className="icon-box">
                            <FaUsers className="icon" />
                            <h3>Collaboration</h3>
                            <p>Working with teams to achieve impactful results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
