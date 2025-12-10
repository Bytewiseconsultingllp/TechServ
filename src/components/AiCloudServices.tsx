'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AiCloudServices() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, [])

  return (
    <>
      <section className="party">
        <div className="container">
          <div className="service-why-choose-box">

            <h2 data-aos="fade-up" data-aos-duration="600">
              Building your Future with AI and Cloud
            </h2>

            <div className="intro">
              <p className="anatic" 
                 data-aos="fade-up" 
                 data-aos-duration="700" 
                 data-aos-delay="200">
                We empower businesses with cutting-edge cloud and AI solutions—leveraging Agentic AI and Microsoft Copilot to deliver intelligent automation, scalability, and security. Our expertise transforms operations, drives innovation, and unlocks new levels of productivity. Build your future with seamless cloud integration and next-gen AI technologies.
              </p>
            </div>

            <div className="our-benefit-body service-why-choose-list">

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="100">
                <h3>AI Readiness Assessment</h3>
                <p className="anatic">
                  Prepare your business for the AI revolution. Our AI Readiness Assessment helps organizations evaluate their current infrastructure, data maturity, and operational workflows to determine how ready they are to adopt AI.
                </p>
                <p className="anatic">
                  Start your AI journey with confidence—future-proof your business with expert insights.
                </p>
              </div>

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="200">
                <h3>Agentic AI Automation</h3>
                <p className="anatic">
                  Move from automation to autonomy. We design and deploy Agentic AI systems that act as intelligent agents—capable of reasoning, decision-making, and executing tasks across your business processes.
                </p>
                <p className="anatic">
                  Unlock new levels of productivity and scale with autonomous AI systems that work alongside your teams.
                </p>
              </div>

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="300">
                <h3>Cloud Analytics Consultancy</h3>
                <p className="anatic">
                  Unlock the power of data with expert cloud analytics consultancy. We help businesses leverage cloud-based insights to drive smarter decisions and optimize performance. Transform your data strategy with scalable, secure, and efficient cloud solutions.
                </p>
              </div>

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="400">
                <h3>Cloud Data Science Services</h3>
                <p className="anatic">
                  Harness the potential of cloud-powered data science to extract valuable insights. Our services include predictive analytics, machine learning, and AI-driven solutions to enhance decision-making. Scale your data operations with secure and efficient cloud infrastructure.
                </p>
              </div>

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="500">
                <h3>Cloud Application Development</h3>
                <p className="anatic">
                  Build scalable and high-performance applications with cloud-native technologies. Our experts design, develop, and deploy secure cloud applications tailored to your business needs. Accelerate innovation with flexible, cost-effective cloud solutions.
                </p>
              </div>

              <div className="benefit-body-item"
                   data-aos="fade-up" 
                   data-aos-duration="600" 
                   data-aos-delay="600">
                <h3>Cloud Customer Experience Solutions</h3>
                <p className="anatic">
                  Enhance customer interactions with cloud-driven experience solutions. Leverage AI, automation, and real-time analytics to personalize engagement and improve satisfaction. Deliver seamless, scalable, and efficient customer experiences across all touchpoints.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* Root Variables */
        :root {
          --primary-color: #010535;
          --secondary-color: #F2F2F5;
          --text-color: #707070;
          --accent-color: #4D51AB;
          --accent-secondary-color: #55CEE3;
          --white-color: #FFFFFF;
          --default-font: "Plus Jakarta Sans", sans-serif;
        }

        section.party {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .container {
          max-width: 1300px;
          margin: auto;
          padding: 0 15px;
        }

        h2 {
          font-size: calc(1.325rem + .9vw);
          font-weight: 600;
          color: var(--primary-color);
          text-align: center;
          margin-bottom: 30px;
          transition: all 0.6s ease;
        }

        .intro {
          max-width: 80%;
          margin: auto;
          text-align: center;
          margin-bottom: 40px;
        }

        .anatic {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-color);
          margin-bottom: 15px;
        }

        /* GRID LAYOUT */
        .service-why-choose-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .service-why-choose-list {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .intro {
            max-width: 95%;
          }
          
          section.party {
            padding: 60px 0;
          }
        }

        /* CARD STYLE */
        .benefit-body-item {
          background: #f2f2f5;
          border-radius: 15px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .benefit-body-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(77, 81, 171, 0.15);
          border-color: var(--accent-color);
        }

        .benefit-body-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary-color));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .benefit-body-item:hover::before {
          transform: scaleX(1);
        }

        .benefit-body-item h3 {
          color: var(--accent-color);
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .benefit-body-item:hover h3 {
          color: var(--primary-color);
        }

        .benefit-body-item .anatic {
          margin-bottom: 8px;
        }

        .benefit-body-item .anatic:last-child {
          margin-bottom: 0;
        }

        /* AOS Animations are now handled by the library */
      `}</style>
    </>
  );
}