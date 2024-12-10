import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                {/* Header Section */}
                <header className="contact-header">
                    <h1>Contact Me</h1>
                    <p>Feel free to reach out for any inquiries, collaborations, or questions!</p>
                </header>

                {/* Main Content */}
                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form">
                        <h2 className="form-title">Send a Message</h2>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" className="form-input textarea" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <p>mehmet.z.d80@gmail.com.com</p>
                        </div>
                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <p>+1 (514) 992-8144</p>
                        </div>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
