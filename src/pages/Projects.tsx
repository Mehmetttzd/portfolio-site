import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        { title: 'UI Design', image: 'https://via.placeholder.com/300', category: 'UI' },
        { title: 'UX Research', image: 'https://via.placeholder.com/300', category: 'UX' },
        { title: 'Web Design', image: 'https://via.placeholder.com/300', category: 'Web Design' },
    ];

    return (
        <section id="projects" className="px-10 py-20 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-10">
                My Recent <span className="text-cyan-400">Works</span>
            </h2>
            <div className="flex justify-center mb-10">
                <button className="px-4 py-2 bg-cyan-400 text-white rounded-lg mx-2 hover:bg-cyan-300">
                    All
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg mx-2 hover:bg-gray-700">
                    UI
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg mx-2 hover:bg-gray-700">
                    UX
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg mx-2 hover:bg-gray-700">
                    Web Design
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
