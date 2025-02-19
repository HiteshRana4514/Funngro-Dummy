import React from 'react'

function SharkTank() {
    return (
        <>
            <section className="shark-tank" id="shark-tank">
                <div className="container">
                    <h2 className="section-title">Funngro @ Shark Tank</h2>
                    <p className="section-subtitle">Loved by lakhs of Teenlancers, Shelancers and thousands of Companies & now loved by SHARKS!!</p>
                    <div className="video-wrapper">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/I0XgtabN8rI?si=HHotbN4EAvxN1yn7"
                            title="Funngro - Shark Tank"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SharkTank