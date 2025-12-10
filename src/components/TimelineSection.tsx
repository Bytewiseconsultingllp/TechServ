'use client'

import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TimelineSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, [])

  const timelineData = [
    {
      year: "2015",
      title: "First Product Launch",
      description: "Released our flagship product that quickly gained traction in the market and established our brand.",
      buttonText: "Learn More",
      featured: true
    },
    {
      year: "2017", 
      title: "Series A Funding",
      description: "Secured $10M in funding to strategically expand our team and accelerate innovative product development.",
      buttonText: "Learn More",
      featured: false
    },
    {
      year: "2018",
      title: "Global Expansion", 
      description: "Opened offices in 2 new countries and expanded our customer base to over 60 countries worldwide.",
      buttonText: "Learn More",
      featured: false
    },
    {
      year: "2020",
      title: "Mobile App Release",
      description: "Launched our mobile app to provide seamless user experience on-the-go for millions of customers.",
      buttonText: "Learn More", 
      featured: false
    }
  ]

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    <section className="timeline-section">
      <div className="container">
        {/* Header */}
        <div className="timeline-header" data-aos="fade-up">
          <h2>Our Journey</h2>
          <p>Use the arrows to explore our milestones and achievements over the years</p>
        </div>

        {/* Navigation Arrows */}
        <div className="timeline-nav">
          <button 
            className="nav-arrow nav-left" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="nav-arrow nav-right" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container" data-aos="fade-up" data-aos-delay="200">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Scrollable Timeline Items */}
          <div className="timeline-scroll" ref={timelineRef}>
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                {/* Year Badge */}
                <div className="year-badge">
                  <div className="year-dot"></div>
                  <div className="year-label">{item.year}</div>
                </div>

                {/* Timeline Card */}
                <div className={`timeline-card ${item.featured ? 'featured' : ''}`}>
                  {item.featured && <div className="card-icon">
                    <i className="fas fa-rocket"></i>
                  </div>}
                  
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="timeline-btn">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          padding: 100px 0;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .timeline-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .timeline-header p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline-nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .nav-arrow {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #3b82f6;
          background: white;
          color: #3b82f6;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .nav-arrow:hover {
          background: #3b82f6;
          color: white;
          transform: scale(1.1);
        }

        .timeline-container {
          position: relative;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: translateY(-50%);
          z-index: 1;
        }

        .timeline-scroll {
          display: flex;
          gap: 50px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 0 20px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }

        .timeline-item {
          flex: 0 0 320px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .year-badge {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .year-dot {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 2px #3b82f6;
          margin-bottom: 10px;
        }

        .year-label {
          background: #3b82f6;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
        }

        .timeline-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          width: 100%;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .timeline-card.featured {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
        }

        .timeline-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        .timeline-card.featured:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .card-icon {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: #fbbf24;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .timeline-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: inherit;
        }

        .timeline-card.featured h3 {
          color: white;
          margin-top: 15px;
        }

        .timeline-card p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 25px;
          color: #64748b;
        }

        .timeline-card.featured p {
          color: rgba(255, 255, 255, 0.9);
        }

        .timeline-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .timeline-card.featured .timeline-btn {
          background: white;
          color: #3b82f6;
        }

        .timeline-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .timeline-card.featured .timeline-btn:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .timeline-header h2 {
            font-size: 2rem;
          }
          
          .timeline-item {
            flex: 0 0 280px;
          }
          
          .timeline-card {
            padding: 25px 20px;
          }
          
          .timeline-scroll {
            gap: 30px;
            padding: 0 10px;
          }
          
          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .timeline-item {
            flex: 0 0 260px;
          }
          
          .timeline-section {
            padding: 80px 0;
          }
        }
      `}</style>
    </section>
  )
}

export default TimelineSection