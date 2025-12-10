'use client'

import React, { useRef, useState } from "react";

export default function FAQSection() {
  const faqData = [
    {
      q: "What makes Techcerv different as a Microsoft Partner?",
      a: "The cloud is global network of remote servers that allows users access to their data and apps from their personal devices, regardless of their location. The cloud can also refer to cloud computing, the delivery of computing resources (databases, servers, networks) that are accessed over the internet."
    },
    {
      q: "What are the benefits of migrating to the cloud?",
      a: "A cloud migration is when an enterprise partially or completely moves their digital assets and apps, services, and IT resources onto the cloud. Enterprises often migrate away from old legacy infrastructure, helping them improve performance and efficiency."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }
    setOpenIndex(index);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.titleWrapper}>
        <span style={styles.icon}>💡</span>
        <h3 style={styles.faqTitle}>FAQ</h3>
      </div>
      <h1 style={styles.heading}>You have questions. We have answers.</h1>

      <div style={styles.container}>
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} style={{ marginBottom: "20px" }}>
              {/* Header */}
              <div
                style={{
                  ...styles.header,
                  ...(isOpen ? styles.headerOpen : {})
                }}
                onClick={() => toggleAccordion(i)}
              >
                <span>{item.q}</span>
                <svg
                  style={{
                    ...styles.chevron,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    fill: isOpen ? "#ffffff" : "#6b7280",
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>

              {/* Animated Body */}
              <div
                ref={(el) => (bodyRefs.current[i] = el)}
                style={{
                  ...styles.body,
                  height: isOpen
                    ? bodyRefs.current[i]?.scrollHeight ? bodyRefs.current[i]!.scrollHeight + 40 + "px" : "auto"
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                  paddingTop: isOpen ? "20px" : "0px",
                  paddingBottom: isOpen ? "20px" : "0px",
                }}
              >
                <p style={styles.answer}>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* CSS-in-JS styles (same as HTML version) */
const styles = {
  wrapper: {
    padding: "80px 20px",
    textAlign: "center" as const,
    fontFamily: "Inter, sans-serif",
    background: "#ffffff",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "24px",
  },
  faqTitle: {
    fontSize: "16px",
    letterSpacing: "2px",
    color: "#07194B",
    fontWeight: 600,
    margin: 0,
  },
  heading: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#07194B",
    marginBottom: "60px",
    marginTop: "10px",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
  },
  header: {
    background: "#ffffff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderRadius: "12px",
    padding: "20px 28px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    fontSize: "18px",
    fontWeight: 600,
    color: "#1a1d3e",
    transition: "all 0.3s ease",
  },
  headerOpen: {
    background: "#0A3C89",
    color: "#ffffff",
    borderColor: "#0A3C89",
    borderRadius: "12px 12px 0 0",
  },
  chevron: {
    fontSize: "24px",
    transition: "transform 0.3s ease",
    color: "#6b7280",
    fontWeight: 900,
    lineHeight: "0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24px",
    width: "24px",
  },
  body: {
    background: "#0A3C89",
    color: "#ffffff",
    textAlign: "left" as const,
    overflow: "hidden",
    borderRadius: "0 0 12px 12px",
    paddingLeft: "28px",
    paddingRight: "28px",
    height: "0px",
    opacity: 0,
    transition:
      "height 0.35s ease, opacity 0.35s ease, padding 0.35s ease",
  },
  answer: {
    fontSize: "16px",
    lineHeight: "1.7",
    margin: 0,
    color: "rgba(255, 255, 255, 0.95)",
  },
};
