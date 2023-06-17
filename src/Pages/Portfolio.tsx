import React from 'react';

const PortfolioPage: React.FC = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://example.com/project1.jpg',
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://example.com/project2.jpg',
        },
        // Add more project objects as needed
    ];

    return (
        <div>
            <h1>Portfolio</h1>
            <p>Check out some of our featured projects:</p>

            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <img src={project.imageUrl} alt={project.title} />
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PortfolioPage;
