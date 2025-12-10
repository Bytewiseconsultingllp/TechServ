import React from "react";
import "./ResourcesPage.css"; // <-- create this CSS file

const ResourcesPage = () => {
  const resources = [
    {
      tag: "Blog",
      img: "https://cdn.antstack.com/resources/Work-Life-Balance.png",
      title: "Work-Life Balance career and personal life.",
      desc: "Practical strategies to maintain productivity while keeping a healthy balance between your career and personal life.",
      link: "/",
    },
    {
      tag: "Case Study",
      img: "https://cdn.antstack.com/resources/Middleware-QSRs.png",
      title: "Why Middleware for QSRs Should Be Infrastructure-Free",
      desc: "Discover how modern infrastructure-free middleware solutions can empower quick service restaurants (QSRs).",
      link: "/",
    },
    {
      tag: "Insight",
      img: "https://cdn.antstack.com/resources/Data-Engineering-Healthcare.png",
      title: "How Data Engineering Shapes Modern Healthcare Research",
      desc: "A deep dive into how data pipelines and engineering are revolutionizing healthcare and medical research.",
      link: "/",
    },
  ];

  return (
    <div>

      {/* Top Blue Header */}
      <div className="page-header">
        <h1>Resources</h1>

        <nav>
          <ol className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li>›</li>
            <li className="active">Resources</li>
          </ol>
        </nav>
      </div>

      {/* Resource Cards Section */}
      <div className="resources-section">
        <div className="card-container">

          {resources.map((item, index) => (
            <div className="resource-card" key={index}>
              <div className="thumb-wrapper">
                <span className="badge">{item.tag}</span>
                <img className="thumb" src={item.img} alt={item.title} />
              </div>

              <div className="resource-content">
                <div className="resource-title">{item.title}</div>
                <p className="resource-desc">{item.desc}</p>
                <a href={item.link} className="read-more">Read More →</a>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default ResourcesPage;
