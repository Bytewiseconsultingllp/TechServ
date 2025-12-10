'use client'

import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const servicesData = [
    {
      title: "Copilot Enablement & Studio Customization",
      desc: "Unleash productivity with Microsoft Copilot across Teams, Word, Excel, Outlook & more.",
    },
    {
      title: "Enterprise AI Solutions",
      desc: "AI chatbots, document automation, AI search, and integrated intelligent workflows.",
    },
    {
      title: "Azure AI Foundry Innovation",
      desc: "Build and deploy copilots, AI agents, and multi-agent workflows with Azure AI.",
    },
    {
      title: "Microsoft 365 Services",
      desc: "Enhance collaboration with Teams, Outlook, SharePoint and secure cloud workflows.",
    },
    {
      title: "Public Cloud Services",
      desc: "Infrastructure, storage and compute solutions on AWS, Azure and Google Cloud.",
    },
    {
      title: "Google Workspace",
      desc: "Setup, migration & collaboration enhancements for Gmail, Meet, Drive and Docs.",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --primary-color: #010535;
          --secondary-color: #F2F2F5;
          --text-color: #707070;
          --accent-color: #154B9C;
          --white: #ffffff;
          --divider-color: #F5F5F5;
          --font: "Plus Jakarta Sans", sans-serif;
        }

        .our-services {
          background: var(--secondary-color);
          padding: 100px 0 70px;
          font-family: var(--font);
        }

        .section-title .sub-heading {
          position: relative;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding-left: 30px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .section-title .sub-heading::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 20px;
          height: 20px;
          transform: translateY(-50%);
          background: url("/icon-sub-heading.svg") no-repeat center / cover;
        }

        .section-title .main-heading {
          font-size: 42px;
          font-weight: 700;
          color: var(--primary-color);
        }

        .service-item {
          position: relative;
          background: var(--white);
          border: 1px solid var(--divider-color);
          border-radius: 15px;
          padding: 35px;
          overflow: hidden;
          transition: 0.4s ease;
        }

        .service-item::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: var(--accent-color);
          transition: 0.4s ease-in-out;
          z-index: 0;
        }

        .service-item:hover::before {
          height: 100%;
        }

        .service-item * {
          position: relative;
          z-index: 1;
        }

        .service-item:hover h3 a,
        .service-item:hover p {
          color: white;
        }

        .service-item:hover .line {
          background: white;
        }

        .service-item:hover .service-btn a {
          background: white;
          color: #154B9C;
        }

        .service-title-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .service-title h3 {
          font-size: 20px;
          margin: 0;
          color: var(--primary-color);
        }

        .service-title a {
          text-decoration: none;
          transition: 0.3s;
        }

        .service-btn a {
          height: 35px;
          width: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--accent-color);
          color: white;
          border-radius: 50%;
          transition: 0.3s;
        }

        .service-btn a:hover {
          transform: translateX(3px);
        }

        .line {
          width: 16%;
          height: 5px;
          background: var(--accent-color);
          border-radius: 10px;
          margin: 12px 0 15px;
        }

        .service-content p {
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .text-center {
          text-align: center;
        }

        .mb-5 {
          margin-bottom: 3rem;
        }

        .row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .col-lg-4 {
          width: 100%;
        }

        .col-md-6 {
          width: 100%;
        }

        @media (max-width: 992px) {
          .row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
          }

          .section-title .main-heading {
            font-size: 32px;
          }
        }
      `}</style>

      {/* JSX Starts */}
      <section className="our-services">
        <div className="container">

          <div className="section-title text-center mb-5">
            <h3 className="sub-heading">our services</h3>
            <h2 className="main-heading">AI, Cloud & Digital Transformation Services</h2>
          </div>

          <div className="row g-4">
            {servicesData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-item">
                  <div className="service-title-box">
                    <div className="service-title">
                      <h3><a href="#!">{item.title}</a></h3>
                    </div>
                    <div className="service-btn">
                      <a href="#!"><FaArrowRight /></a>
                    </div>
                  </div>

                  <div className="line"></div>

                  <div className="service-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
