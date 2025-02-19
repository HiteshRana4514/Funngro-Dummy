import React from 'react'
import aboutImg from '../assets/images/about-funngro.png'
import { FaLinkedin } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="section-header">
                    <BsFillRocketTakeoffFill className="header-icon" />
                    <h2>About Funngro</h2>
                    <p>Empowering the next generation</p>
                </div>
                
                <div className="about-content">
                    <div className="about-info">
                        <div className="about-text">
                            <h3>
                                The name says it all -
                                <span className="highlight-text">
                                    "Its <span className="text-fun">Fun</span> to <span className="text-grow">Grow</span>"
                                </span>
                            </h3>
                            
                            <div className="mission-box">
                                <h4>Our Mission</h4>
                                <p>Enable Smart Teenagers and Smart Companies to realize their full potentials.</p>
                            </div>

                            <div className="about-description">
                                <p>
                                    Funngro is built by educators, Tech enthusiasts, IIM alumni, and Finance experts - but
                                    most importantly by Loving parents. We are thankful to those mentors who helped
                                    us in early stage of our lives and Funngro is our effort to give back to the society.
                                </p>
                                <p>
                                    Our mission is to enable Teenagers to become financially empowered and
                                    grow up to be responsible citizens.
                                </p>
                            </div>

                            <div className="founders-section">
                                <h4>Leadership</h4>
                                <div className="founders-grid">
                                    <div className="founder-card">
                                        <div className="founder-info">
                                            <h5>Payal Jain</h5>
                                            <span>CEO & Co-founder</span>
                                        </div>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                    <div className="founder-card">
                                        <div className="founder-info">
                                            <h5>Anik Jain</h5>
                                            <span>CGO & Co-founder</span>
                                        </div>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="tagline-banner">
                                <h4>BE INDEPENDENT BEFORE 18!</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-visual">
                        <div className="image-container">
                            <img src={aboutImg} alt="About Funngro Word Cloud" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
