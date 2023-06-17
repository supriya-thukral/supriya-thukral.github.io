import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomePage: React.FC = () => {
    return (
        <div>
            <section className="container rounded shadow-lg" id="about-box">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <figure>
                            <img className="img-fluid align-self-center shadow-lg rounded" src="SupriyaThukral.jpg" alt="Photo of Supriya Thukral" />
                        </figure>
                    </div>
                    <div className="col-sm-6 text-center pt-5">
                        <div className="container">
                            <h1 id="intro">Hi! I'm Supriya!</h1>
                            <p>I am a Software Engineering Intern at Forma.AI, where I am gaining valuable experience in developing cutting-edge solutions.</p>
                            <p>With a passion for technology and a keen interest in software development, I'm continuously honing my skills to create efficient and scalable applications.</p>
                            <p>On this page, you will find examples of my work and projects that highlight my technical abilities and problem-solving skills.</p>
                            <section id="socials" className="text-center">
                                <p>Connect with me:</p>
                                <p>
                                    <a href="https://www.linkedin.com/in/supriyathukral/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className='fa-icon' />
                                    </a>
                                    <a href="https://github.com/sthukral" target="_blank" rel="noopener noreferrer" className='fa-icon'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a href="https://www.instagram.com/chasingmomentsphotoco/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className='fa-icon' />
                                    </a>
                                </p>
                                <a className="btn btn-primary" id="devpost" href="https://devpost.com/software/covwe" role="button" target="_blank" rel="noopener noreferrer">Latest Hackathon »</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
