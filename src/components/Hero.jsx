import React, { useState, useEffect } from 'react'
import bannerImg from '../assets/images/banner-1.jpg'

function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            <section id="hero" className="hero">
                <div className="container">
                    <h1 className="fade-in">Funngro Teenlancer</h1>
                    <p className="fade-in">Smart Teenagers meet Smart Companies</p>
                    <button className="btn-primary scale-in">Download App</button>
                    <div className="scroll-indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
                <div className={`banner ${!imageLoaded ? 'loading' : ''}`}>
                    {!imageLoaded && <div className="banner-skeleton" />}
                    <img 
                        src={bannerImg} 
                        alt="Banner Image"
                        loading="eager" 
                        width="1920"
                        height="1080"
                        onLoad={() => setImageLoaded(true)}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                    />
                </div>
            </section>
        </>
    )
}
export default Hero