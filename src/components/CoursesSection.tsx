'use client'

import React, { useState } from "react";
import "./CoursesSection.css"; // ⬅ Create this file with CSS below

const CoursesSection = () => {
  const [currentCategory, setCurrentCategory] = useState("ai");
  const [currentSub, setCurrentSub] = useState("foundational");

  // CATEGORY BUTTONS
  const categories = [
    { id: "aws", label: "AWS" },
    { id: "gcp", label: "Google Cloud" },
    { id: "m365", label: "Microsoft 365" },
    { id: "ai", label: "Artificial Intelligence" }
  ];

  // SUB-TABS FOR EACH CATEGORY
  const subTabs = {
    aws: [
      { id: "beginner", label: "Beginner" },
      { id: "associate", label: "Associate Level" },
      { id: "pro", label: "Professional Level" },
      { id: "specialty", label: "Specialty" }
    ],

    gcp: [
      { id: "foundational", label: "Foundational" },
      { id: "associate", label: "Associate" },
      { id: "pro", label: "Professional" }
    ],

    m365: [
      { id: "fundamental", label: "Fundamentals" },
      { id: "associate", label: "Associate" },
      { id: "expert", label: "Expert" },
      { id: "specialty", label: "Specialty" },
      { id: "copilot", label: "Copilot & AI" }
    ],

    ai: [
      { id: "foundational", label: "Foundational" },
      { id: "intermediate", label: "Intermediate Level" },
      { id: "advanced", label: "Advanced Level" },
      { id: "role", label: "Role-Based Certifications" }
    ]
  };

  // ALL CARDS DATA
  const cards = [
    // AI – Foundational
    {
      cat: "ai",
      sub: "foundational",
      title: "AI-900 – Azure AI Fundamentals",
      enrolled: 2464,
      duration: "5 Weekends",
      price: "₹ 49,999.00",
      img: "/dev.png"
    },

    {
      cat: "ai",
      sub: "foundational",
      title: "PCEP – Entry-Level Python Programmer",
      enrolled: 2464,
      duration: "5 Weekends",
      price: "₹ 49,999.00",
      img: "/dev.png"
    },

    // AWS Beginner Example
    {
      cat: "aws",
      sub: "beginner",
      title: "AWS Cloud Practitioner",
      enrolled: 1500,
      duration: "4 Weekends",
      price: "₹ 39,999.00",
      img: "/dev.png"
    }
  ];

  // FILTER VISIBLE CARDS
  const visibleCards = cards.filter(
    (c) => c.cat === currentCategory && c.sub === currentSub
  );

  return (
    <section id="courses" className="course-section">

      {/* TITLE */}
      <div className="section-title">
        <p>Find the Course Right for Your Goals</p>
        <h2>Explore From Over 400+ Courses</h2>
      </div>

      <div className="container">

        {/* SIDEBAR */}
        <div className="sidebar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={currentCategory === cat.id ? "active" : ""}
              onClick={() => {
                setCurrentCategory(cat.id);
                setCurrentSub(subTabs[cat.id][0].id); // default first tab
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content">

          {/* SUB TABS */}
          <div className="tabs active">
            {subTabs[currentCategory].map((tab) => (
              <button
                key={tab.id}
                className={currentSub === tab.id ? "active" : ""}
                onClick={() => setCurrentSub(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CARDS GRID */}
          <div className="row">
            {visibleCards.length > 0 ? (
              visibleCards.map((card, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img src={card.img} className="card-img-top" alt="course" />

                    <div className="card-body">
                      <h6 className="card-title">{card.title}</h6>
                      <p className="par12">
                        <i className="fa-solid fa-user"></i> {card.enrolled} Enrolled
                      </p>
                      <p className="par12">
                        <i className="fa-solid fa-clock"></i> {card.duration}
                      </p>
                      <h6 className="par13">{card.price}</h6>

                      <button className="explorebtn">
                        EXPLORE NOW →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses available for this filter.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
