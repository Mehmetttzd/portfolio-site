import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-green-900 text-white py-4 px-6 shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo or Name */}
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="hover:text-green-300">
                        Mohammad Yazdkhasti
                    </Link>
                </h1>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 text-lg">
                        <li>
                            <Link to="/" className="hover:text-green-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-green-300">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-green-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
