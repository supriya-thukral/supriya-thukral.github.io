import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { IoInformationCircle } from 'react-icons/io5';


const SkillsSection: React.FC = () => {
    const frontEndSkills = [
        { name: 'React', level: 85, description: 'Comfortable with React and TypeScript' },
        { name: 'Redux', level: 80, description: 'Fairly familiar with Redux' },
        { name: 'SCSS', level: 75, description: 'Experienced with SCSS' },
        { name: 'Jest', level: 70, description: 'Proficient in writing tests with Jest' },
    ];

    const backEndSkills = [
        { name: 'Django', level: 80, description: 'Comfortable with Django and setting up models' },
        { name: 'Python', level: 75, description: 'Proficient in Python' },
        { name: 'SQL', level: 70, description: 'Experienced in writing SQL queries' },
    ];

    const renderSkillItem = (skill: { name: any; level: any; description: any; }) => {
        return (
            <div key={skill.name} className="skill">
                <div className="skill-icon" title={skill.description}>
                    <IoInformationCircle />
                </div>
                <div className="skill-name">{skill.name}</div>
                <ProgressBar now={skill.level} label={`${skill.level}%`} variant="custom" className="custom-progress-bar" />
            </div>
        );
    };



    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="section">
                <h3>Front-end</h3>
                {frontEndSkills.map((skill) => renderSkillItem(skill))}
            </div>
            <div className="section">
                <h3>Back-end</h3>
                {backEndSkills.map((skill) => renderSkillItem(skill))}
            </div>
        </section>
    );
};

export default SkillsSection;
