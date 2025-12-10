'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, [])

  const services = [
    {
      title: "Copilot Enablement & Studio Customization",
      description: "Unleash productivity with Microsoft Copilot across Teams, Word, Excel, Outlook & more.",
      delay: "100"
    },
    {
      title: "Enterprise AI Solutions", 
      description: "Turn your data into decisions with AI chatbots, automation & intelligent workflows.",
      delay: "200"
    },
    {
      title: "Azure AI Foundry Innovation",
      description: "Build AI agents, copilots & automation using Azure OpenAI & Cognitive Services.",
      delay: "300"
    },
    {
      title: "Microsoft 365 Services",
      description: "Optimize Teams, SharePoint, Outlook & cloud workplace productivity.",
      delay: "400",
      active: false
    },
    {
      title: "Public Cloud Services",
      description: "AWS, Azure & GCP cloud infrastructure, security & cost optimization.",
      delay: "500",
      active: true
    },
    {
      title: "Google Workspace",
      description: "Google Drive, Gmail, Meet setup, migration & administration.",
      delay: "600"
    },
    {
      title: "Zoho Workplace",
      description: "Zoho Mail, Cliq, Drive integration & workflow optimization.",
      delay: "700"
    },
    {
      title: "Managed Services",
      description: "Complete Microsoft 365 & cloud management, updates & security.",
      delay: "800"
    },
    {
      title: "App Development",
      description: "Dynamic, scalable web & cloud-native app development.",
      delay: "900"
    }
  ]

  return (
    <section className="our-services">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 data-aos="fade-up" data-aos-duration="600">
                <i className="fas fa-cube service-icon"></i>
                OUR SERVICES
              </h3>
              <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                AI, Cloud & Digital Transformation Services
              </h2>
            </div>
          </div>
        </div>

        <div className="row services-grid">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className={`service-item ${service.active ? 'active' : ''}`}
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay={service.delay}
              >
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-btn">
                    <button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

        .our-services {
          background: #F6F6F6;
          padding: 100px 0 70px;
        }

        .container {
          max-width: 1300px;
          margin: auto;
          padding: 0 15px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title h3 {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .service-icon {
          font-size: 16px;
          color: var(--accent-color);
        }

        .section-title h2 {
          font-size: calc(2rem + 1.5vw);
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1.2;
          max-width: 800px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          justify-content: center;
        }

        .col-lg-4 {
          display: contents;
        }

        .service-item {
          position: relative;
          background: var(--white-color);
          border: 1px solid #e8e8e8;
          border-radius: 15px;
          height: 100%;
          padding: 40px 30px;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
        }

        .service-item::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--accent-color);
          height: 0;
          width: 100%;
          z-index: 0;
          transition: all 0.4s ease-in-out;
        }

        .service-item:hover::before,
        .service-item.active::before {
          height: 100%;
        }

        .service-title-box {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          z-index: 2;
        }

        .service-title h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--primary-color);
          line-height: 1.3;
          margin: 0;
          flex: 1;
          padding-right: 20px;
          transition: all 0.4s ease-in-out;
        }

        .service-item:hover .service-title h3,
        .service-item.active .service-title h3 {
          color: var(--white-color);
        }

        .service-btn button {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--accent-color);
          color: var(--white-color);
          border: none;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .service-item:hover .service-btn button,
        .service-item.active .service-btn button {
          background: var(--white-color);
          color: var(--accent-color);
          transform: scale(1.1);
        }

        .service-content {
          position: relative;
          z-index: 2;
        }

        .service-content p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-color);
          margin: 0;
          transition: all 0.4s ease-in-out;
        }

        .service-item:hover .service-content p,
        .service-item.active .service-content p {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .section-title h2 {
            font-size: calc(1.5rem + 1vw);
          }
          
          .our-services {
            padding: 80px 0 50px;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .service-title-box {
            flex-direction: column;
            gap: 15px;
          }
          
          .service-title h3 {
            padding-right: 0;
          }
          
          .service-btn {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

export default OurServices