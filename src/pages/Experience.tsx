import React from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './Experience.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Experience: React.FC = () => {
    const barData = {
        labels: ['Cashier', 'DevFortress', 'Pooneh Media'],
        datasets: [
            {
                label: 'Skill Level (Out of 10)',
                data: [7, 9, 8],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const radarData = {
        labels: ['Web Development', 'UI/UX Design', 'Browser Extensions', 'Customer Service', 'Problem Solving'],
        datasets: [
            {
                label: 'Skill Level (Out of 100)',
                data: [85, 75, 90, 60, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="experience-container">
            <h1 className="experience-title">My Experience</h1>
            <div className="experience-layout">
                {/* Left Side: Charts */}
                <div className="charts-section">
                    <div className="chart">
                        <h2 className="chart-title">Job-Specific Skills</h2>
                        <Bar data={barData} />
                    </div>
                    <div className="chart">
                        <h2 className="chart-title">Overall Skills</h2>
                        <Radar data={radarData} />
                    </div>
                </div>

                {/* Right Side: Job Descriptions */}
                <div className="job-boxes">
                    <div className="job-box">
                        <h2>DevFortress Internship</h2>
                        <p>
                            During my internship at DevFortress, I specialized in developing browser extensions and
                            automation scripts. My work involved improving workflows, creating efficient web tools, and
                            collaborating with a dynamic team to solve complex technical problems. Skills gained include
                            web development, extension development, and task automation.
                        </p>
                    </div>
                    <div className="job-box">
                        <h2>Costco Wholesale</h2>
                        <p>
                            As a cashier at Costco, I honed my customer service and problem-solving skills in a
                            fast-paced retail environment. I was responsible for handling financial transactions
                            accurately, managing high volumes of customers, and maintaining a positive customer
                            experience.
                        </p>
                    </div>
                    <div className="job-box">
                        <h2>Pooneh Media</h2>
                        <p>
                            At Pooneh Media, I worked as a web developer, focusing on building responsive websites and
                            ensuring an exceptional user experience. I collaborated with clients to deliver tailored
                            solutions, developed front-end interfaces, and enhanced overall website functionality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
