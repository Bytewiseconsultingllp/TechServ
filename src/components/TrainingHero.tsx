import React from "react";

export default function TrainingHero() {
    return (
        <div className="hero-wrapper">
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-left">
                    <h1>
                        Master High-Demand <br /> Skills for Future Careers
                    </h1>

                    <p>
                        Experience learning that drives real results. We're revolutionizing how
                        you master new-age technologies, getting you job-ready faster than ever.
                    </p>

                    <a href="#courses" className="explore-btn">
                        Explore Our Courses →
                    </a>
                </div>

                {/* RIGHT CONTENT */}
                <div className="hero-right">
                    <img src="/heroimage.png" alt="Hero Graphic" />
                </div>
            </div>

            {/* ------------ CSS INSIDE COMPONENT ------------ */}
            <style>{`
                .hero-wrapper {
                    background: #F6F6F6;
                    padding: 40px 0 80px;
                    min-height: calc(100vh - 80px);
                    display: flex;
                    align-items: center;
                }

                .hero-container {
                    width: 90%;
                    max-width: 1400px;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 60px;
                }

                /* LEFT SECTION */
                .hero-left {
                    max-width: 600px;
                    flex: 1;
                }

                .hero-left h1 {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 1.15;
                    color: #000;
                    margin-bottom: 24px;
                }

                .hero-left p {
                    font-size: 18px;
                    line-height: 1.7;
                    margin-top: 0;
                    margin-bottom: 40px;
                    color: #4a4a4a;
                }

                .explore-btn {
                    display: inline-block;
                    padding: 16px 36px;
                    border: 2px solid #0d6efd;
                    border-radius: 50px;
                    font-size: 17px;
                    color: #0d6efd;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .explore-btn:hover {
                    background: #0d6efd;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
                }

                /* RIGHT SECTION */
                .hero-right {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .hero-right img {
                    width: 100%;
                    max-width: 650px;
                    height: auto;
                    display: block;
                }

                /* RESPONSIVE */
                @media (max-width: 1200px) {
                    .hero-left h1 {
                        font-size: 52px;
                    }
                    
                    .hero-container {
                        gap: 40px;
                    }
                }

                @media (max-width: 992px) {
                    .hero-wrapper {
                        padding: 60px 0;
                        min-height: auto;
                    }

                    .hero-container {
                        flex-direction: column;
                        text-align: center;
                        gap: 50px;
                    }

                    .hero-left {
                        max-width: 100%;
                    }

                    .hero-left h1 {
                        font-size: 48px;
                    }

                    .hero-right img {
                        max-width: 500px;
                    }
                }

                @media (max-width: 600px) {
                    .hero-left h1 {
                        font-size: 36px;
                    }

                    .hero-left p {
                        font-size: 16px;
                    }

                    .hero-right img {
                        max-width: 100%;
                    }

                    .explore-btn {
                        padding: 14px 28px;
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
}
