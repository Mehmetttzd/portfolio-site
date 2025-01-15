import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./HeaderIcons.css";

const HeaderIcons: React.FC = () => {
    return (
        <div className="header-icons">
            <Link to="/" title="Home" className="icon-link">
                <FaHome className="header-icon" />
            </Link>
            <Link to="/experience" title="Experience" className="icon-link">
                <FaBriefcase className="header-icon" />
            </Link>
            <Link to="/about" title="About" className="icon-link">
                <FaUser className="header-icon" />
            </Link>
            <Link to="/contact" title="Contact" className="icon-link">
                <FaEnvelope className="header-icon" />
            </Link>
        </div>
    );
};

export default HeaderIcons;
