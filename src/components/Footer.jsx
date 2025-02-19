import React from 'react'
import playStore from '../assets/images/appstore.svg'
import googlePlay from '../assets/images/google.svg'
import '../assets/css/footer.css'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section brand-section">
                            <div className="footer-logo">Funngro</div>
                            <p>Empowering the next generation with financial literacy and tools for success.</p>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Connect With Us</h3>
                            <div className="social-links">
                                <a href="#" className="social-link">Facebook</a>
                                <a href="#" className="social-link">Twitter</a>
                                <a href="#" className="social-link">Instagram</a>
                            </div>
                        </div>
                        <div className="footer-section download-section">
                            <h3>Download App</h3>
                            <div className="app-buttons">
                                <a href="#" className="app-button" target="_blank" rel="noopener noreferrer">
                                    <img src={googlePlay} alt="Get it on Google Play" />
                                </a>
                                <a href="#" className="app-button" target="_blank" rel="noopener noreferrer">
                                    <img src={playStore} alt="Download on the App Store" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Funngro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer