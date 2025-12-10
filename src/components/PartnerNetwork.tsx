import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  { src: "/zoho.png", alt: "Zoho" },
  { src: "/stradus.png", alt: "Stradus" },
  { src: "/googlecloud.png", alt: "Google Cloud" },
  { src: "/github.png", alt: "GitHub" },
  { src: "/dell.png", alt: "Dell" },
];

const PartnerNetwork = () => {
  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .partner-container {
          width: 100%;
          margin: 0 auto;
          padding: 50px 0 40px;
        }

        .partner-header {
          text-align: center;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .partner-header .logo {
          height: 60px;
          margin-bottom: 12px;
          display: block;
        }

        .partner-header h2 {
          font-size: 28px;
          margin: 10px 0 4px;
          font-weight: 700;
          color: #000;
        }

        .underline {
          width: 80px;
          height: 4px;
          background: #154B9C;
          margin: 0 auto 10px;
          border-radius: 2px;
        }

        .partner-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }

        .partner-item {
          padding: 0 35px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partner-item img {
          height: 60px;
          object-fit: contain;
          opacity: 0.9;
          transition: 0.3s ease;
        }

        .partner-item img:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .partner-item {
            padding: 0 20px;
          }
          .partner-item img {
            height: 45px;
          }
        }
      `}</style>

      {/* Component HTML */}
      <section className="partner-container">

        {/* Header */}
        <div className="partner-header">
          <img src="/logo.png" alt="TechCerv Logo" className="logo" />
          <div className="underline"></div>
          <h2>PARTNER NETWORK</h2>
        </div>

        {/* Carousel */}
        <div className="partner-wrapper">
          <Marquee pauseOnHover={true} speed={40} gradient={false}>
            {logos.map((item, i) => (
              <div className="partner-item" key={i}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Marquee>
        </div>

      </section>
    </>
  );
};

export default PartnerNetwork;
