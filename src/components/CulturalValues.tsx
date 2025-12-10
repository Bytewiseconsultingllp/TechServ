import React from "react";

const CulturalValues = () => {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <style>{`
            body {
                font-family: "Inter", Arial, sans-serif;
                margin: 0;
                background: #ffffff;
            }

            .section-wrapper {
                padding: 60px 20px;
                text-align: center;
            }

            .section-title {
                font-size: 36px;
                font-weight: 600;
                color: #5b5563;
                margin-bottom: 40px;
            }

            .values-grid {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .top-row, .bottom-row {
                display: flex;
                gap: 30px;
                justify-content: center;
            }

            .value-card {
                width: 280px;
                height: 200px;
                background: #ffffff;
                border-radius: 16px;
                box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.06);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: 0.25s ease;
            }

            .value-card:hover {
                transform: translateY(-6px);
                box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.10);
            }

            .icon-circle {
                width: 90px;
                height: 90px;
                background: #e8edff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 16px;
            }

            .icon-circle i {
                font-size: 40px;
                color: #0d1a60;
            }

            .value-title {
                font-size: 19px;
                font-weight: 600;
                color: #000c3d;
            }
        `}</style>

      <section className="section-wrapper">
        <h2 className="section-title">Our Cultural Values</h2>

        <div className="values-grid">
          {/* TOP ROW */}
          <div className="top-row">
            <div className="value-card">
              <div className="icon-circle">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="value-title">Objective Driven</div>
            </div>

            <div className="value-card">
              <div className="icon-circle">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="value-title">Humble Human</div>
            </div>

            <div className="value-card">
              <div className="icon-circle">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="value-title">Be Curious</div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="bottom-row">
            <div className="value-card">
              <div className="icon-circle">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="value-title">Committed</div>
            </div>

            <div className="value-card">
              <div className="icon-circle">
                <i className="fas fa-list-check"></i>
              </div>
              <div className="value-title">Responsible</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CulturalValues;
