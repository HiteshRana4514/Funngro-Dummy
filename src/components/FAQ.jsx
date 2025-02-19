import React, { useState } from 'react'
import '../assets/css/faq.css'
import { IoIosArrowDown } from 'react-icons/io'

function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "How can I start earning money?",
            answer: "You can start earning money by signing up on Funngro, completing your profile, and applying for available projects that match your skills and interests. Our platform connects teens with verified companies offering various opportunities."
        },
        {
            id: 2,
            question: "Why should Teens work?",
            answer: "Working as a teen helps develop valuable life skills, builds professional experience, teaches financial responsibility, and provides a head start in career development. It's an opportunity to learn while earning."
        },
        {
            id: 3,
            question: "What kind of work can I do?",
            answer: "Teens can engage in various types of work including content creation, social media management, graphic design, data entry, research assistance, and more. All opportunities are age-appropriate and comply with relevant regulations."
        }
    ];

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-content">
                    <div className="faq-left">
                        <h2>Frequently Asked Questions</h2>
                        <p>Part of being successful is asking the right questions and listening to the answers</p>
                        
                        <div className="faq-list">
                            {questions.map((q) => (
                                <div 
                                    key={q.id} 
                                    className={`faq-item ${activeQuestion === q.id ? 'active' : ''}`}
                                    onClick={() => toggleQuestion(q.id)}
                                >
                                    <div className="faq-question">
                                        <h3>{q.question}</h3>
                                        <IoIosArrowDown className="arrow-icon" />
                                    </div>
                                    <div className="faq-answer">
                                        <p>{q.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-right">
                        <div className="faq-card">
                            <h3>Have a Question?</h3>
                            <h2>Check out our answers to frequently asked questions</h2>
                            <button className="btn-primary">
                                View More FAQs
                                <span className="arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
