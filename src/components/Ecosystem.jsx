import React from 'react'

function Ecosystem() {
    return (
        <>
            <section className="ecosystem" id="ecosystem">
                <div className="container">
                    <h2 className="section-title">Our Ecosystem</h2>
                    <p className="section-subtitle">Building a community of growth and opportunity</p>
                    <div className="ecosystem-circles">
                        <div className="circle-container">
                            <div className="circle students">
                                <div className="icon">
                                    <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448ddea7b3ae801fe5503_teen-svg.svg" alt="student" />
                                </div>
                                <h3>STUDENTS</h3>
                                <p>Learn & Earn</p>
                            </div>
                        </div>
                        <div className="circle-container">
                            <div className="circle mentors">
                                <div className="icon">
                                    <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448dd2c8cc33d283d4469_company-svg.svg" alt="Company" />
                                </div>
                                <h3>COMPANIES</h3>
                                <p>Smart Talent Solutions</p>
                            </div>
                        </div>
                        <div className="circle-container">
                            <div className="circle professionals">
                                <div className="icon">
                                    <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448dec9e9c81a645ebdfd_parent-svg.svg" alt="shelancer" />
                                </div>
                                <h3>SHELANCER</h3>
                                <p>Empowering Women</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ecosystem