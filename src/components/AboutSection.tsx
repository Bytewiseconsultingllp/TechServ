'use client'

import React from 'react'

export default function AboutSection() {
    return (
        <>
            <section className="about-section">
                <div className="about-left">
                    <h2>About Techcerv</h2>

                    <p>
                        At Techcerv, we are passionate about empowering businesses through cutting-edge technology solutions. Our team of experts specializes in cloud transformation, digital workspace optimization, and AI-driven innovation to help organizations navigate the complex digital landscape.
                    </p>

                    <p>
                        We believe in delivering exceptional experiences that set your business apart. Our mission is to foster innovation, enhance customer interactions, and accelerate growth with seamless cloud integration and next-generation AI technologies.
                    </p>
                </div>
            </section>

            <style jsx>{`
                :root {
                    --primary-color: #010535;
                    --secondary-color: #f2f2f5;
                    --text-color: #707070;
                    --accent-color: #4d51ab;
                    --accent-secondary-color: #55cee3;
                    --white-color: #ffffff;
                    --default-font: "Plus Jakarta Sans", sans-serif;
                }

                .about-section {
                    padding: 50px 20px;
                    background: #f0f4ff;
                    max-width: 1200px;
                    margin: 30px auto;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                }

                .about-section::before,
                .about-section::after {
                    content: "";
                    position: absolute;
                    border-radius: 20px;
                    z-index: 0;
                    opacity: 0.15;
                }

                .about-section::before {
                    width: 200px;
                    height: 200px;
                    background: #1a3d8f;
                    top: -30px;
                    left: -30px;
                    transform: rotate(20deg);
                }

                .about-section::after {
                    width: 250px;
                    height: 250px;
                    background: #3e65c0;
                    bottom: -50px;
                    right: -50px;
                    transform: rotate(-20deg);
                }

                .about-left {
                    position: relative;
                    z-index: 1;
                    font-family: var(--default-font);
                    color: var(--text-color);
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .about-left h2 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    line-height: 1.2em;
                    color: #1a3d8f;
                    margin: 0 0 20px 0;
                    opacity: 0;
                    transform: translateY(15px);
                    animation: fadeUp 0.7s forwards;
                }

                .about-left p {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #2f3c5e;
                    margin-bottom: 15px;
                    opacity: 0;
                    transform: translateY(15px);
                    animation: fadeUp 0.7s forwards;
                }

                .about-left p:nth-child(2) {
                    animation-delay: 0.3s;
                }

                .about-left p:nth-child(3) {
                    animation-delay: 0.6s;
                }

                @keyframes fadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .about-section {
                        margin: 30px 20px;
                        padding: 60px 20px;
                    }
                    
                    .about-left h2 {
                        font-size: 1.8rem;
                    }
                    
                    .about-left p {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    );
}