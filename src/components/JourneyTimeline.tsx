'use client'

import React, { useEffect, useRef, useState } from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: string
  highlighted?: boolean
}

const JourneyTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isScrollingTimeline, setIsScrollingTimeline] = useState(false)
  const [hasScrolledTimeline, setHasScrolledTimeline] = useState(false)
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2015',
      title: 'First Product Launch',
      description: 'Released our flagship product that quickly gained traction in the market and established our brand.',
      icon: '🚀',
      highlighted: true
    },
    {
      year: '2017',
      title: 'Series A Funding',
      description: 'Secured $10M in funding to strategically expand our team and accelerate innovative product development.',
      icon: '💰'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in 2 new countries and expanded our customer base to over 60 countries worldwide.',
      icon: '🌍'
    },
    {
      year: '2020',
      title: 'Mobile App Release',
      description: 'Launched our mobile app to provide seamless user experience on-the-go for millions of customers.',
      icon: '📱'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Integrated AI to personalize recommendations and improve customer satisfaction and engagement.',
      icon: '🤖'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program achieving carbon neutrality across all operations.',
      icon: '🌱'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current || hasScrolledTimeline) return

      const section = sectionRef.current
      const scrollContainer = scrollContainerRef.current
      const rect = section.getBoundingClientRect()
      
      // Check if section is in viewport
      const isInViewport = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0

      if (isInViewport && !isScrollingTimeline) {
        setIsScrollingTimeline(true)
        
        // Prevent body scroll temporarily
        document.body.style.overflow = 'hidden'
        
        // Calculate the maximum scroll
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
        const scrollDuration = 2000 // 2 seconds to scroll through timeline
        const startTime = Date.now()
        
        const animateScroll = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / scrollDuration, 1)
          
          // Easing function for smooth animation
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2
          
          scrollContainer.scrollLeft = maxScroll * easeProgress
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          } else {
            // Animation complete
            setIsScrollingTimeline(false)
            setHasScrolledTimeline(true)
            document.body.style.overflow = 'auto'
          }
        }
        
        animateScroll()
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'auto'
    }
  }, [isScrollingTimeline, hasScrolledTimeline])

  return (
    <section className="journey-section" ref={sectionRef}>
      <div className="journey-header">
        <h2>Our Journey</h2>
        <p>Use the arrows to explore our milestones and achievements over the years</p>
      </div>

      <div className="timeline-scroll-container" ref={scrollContainerRef}>
        <div className="timeline-content">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Timeline events */}
          <div className="timeline-events">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                {/* Year marker */}
                <div className="year-marker">
                  <div className="year-dot"></div>
                  <div className="year-label">{event.year}</div>
                </div>

                {/* Event card */}
                <div className={`event-card ${event.highlighted ? 'highlighted' : ''}`}>
                  <div className="event-icon">{event.icon}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .journey-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
          overflow: hidden;
        }

        .journey-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .journey-header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #6b6b6b;
          margin-bottom: 12px;
        }

        .journey-header p {
          font-size: 1rem;
          color: #717171;
          max-width: 700px;
          margin: 0 auto;
        }

        .timeline-scroll-container {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          padding: 0 20px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .timeline-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .timeline-content {
          position: relative;
          display: inline-block;
          min-width: 100%;
          padding: 30px 0 30px;
        }

        .timeline-line {
          position: absolute;
          top: 54px;
          left: 0;
          right: 0;
          height: 3px;
          background: #1e3a8a;
          z-index: 1;
        }

        .timeline-events {
          display: flex;
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .timeline-event {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 300px;
        }

        .year-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .year-dot {
          width: 18px;
          height: 18px;
          background: #1e3a8a;
          border-radius: 50%;
          border: 4px solid #1e3a8a;
          box-shadow: 0 0 0 2px white;
          margin-bottom: 10px;
        }

        .year-label {
          background: #1e3a8a;
          color: white;
          padding: 8px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
        }

        .event-card {
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .event-card.highlighted {
          background: #1e3a8a;
          color: white;
          border-color: #1e3a8a;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.3);
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .event-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .event-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: inherit;
        }

        .event-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
          color: inherit;
          opacity: 0.95;
        }

        .event-card.highlighted .event-description {
          opacity: 1;
        }

        .learn-more-btn {
          width: 100%;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .event-card:not(.highlighted) .learn-more-btn {
          background: #1e3a8a;
          color: white;
        }

        .event-card.highlighted .learn-more-btn {
          background: white;
          color: #1e3a8a;
        }

        .learn-more-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .journey-section {
            padding: 60px 15px;
          }

          .journey-header h2 {
            font-size: 2rem;
          }

          .journey-header p {
            font-size: 0.95rem;
          }

          .timeline-event {
            min-width: 280px;
          }

          .scroll-button {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .event-card {
            padding: 20px;
            min-height: 240px;
          }

          .event-title {
            font-size: 1.2rem;
          }

          .event-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default JourneyTimeline
