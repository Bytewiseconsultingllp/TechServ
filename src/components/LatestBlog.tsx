import React from "react";

export default function LatestBlog() {
  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        /* ROOT VARIABLES */
        :root {
            --primary-color:#010535;
            --secondary-color:#F2F2F5;
            --text-color:#707070;
            --accent-color:#4D51AB;
            --accent-secondary-color:#55CEE3;
            --white-color:#FFFFFF;
            --default-font:"Plus Jakarta Sans", sans-serif;
            --bs-body-font-family:var(--default-font);
            --bs-body-font-size:16px;
            --bs-body-color:#212529;
            --bs-body-bg:#FFFFFF;
            --bs-heading-color:#010535;
            --bs-gutter-x:1.5rem;
            --bs-link-color-rgb:13,110,253;
        }

        *, ::before, ::after {
            box-sizing: border-box;
        }

        .latest-blog-container {
            width: 100%;
            margin: auto;
            padding: 0 calc(var(--bs-gutter-x) * 0.5);
            max-width: 1300px;
        }

        /* GRID */
        .latest-blog-row {
            display: flex;
            flex-wrap: nowrap;
            margin-left: -15px;
            margin-right: -15px;
        }
        .latest-blog-row > * { padding: 0 15px; }
        .latest-blog-col {
            width: 33.333333%;
            flex: 0 0 33.333333%;
        }

        /* SECTION */
        .our-blog { padding: 100px 0; background: #fff; }

        .latest-section-row {
            margin-bottom: 80px;
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .latest-section-title {
            max-width: 720px;
            text-align: center;
            margin: 0 auto 40px;
        }

        .latest-section-title h3 {
            display: inline-block;
            font-size: 15px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--primary-color);
            padding-left: 30px;
            margin-bottom: 20px;
            position: relative;
        }

        .latest-section-title h3::before {
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: url(/icon-sub-heading.svg) no-repeat center/cover;
        }

        .latest-section-title h2 {
            font-size: 46px;
            font-weight: 700;
            margin: 0;
            color: var(--primary-color);
        }
        .latest-section-title h2 span {
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary-color));
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* ANIMATION */
        .latest-fadeInUp { animation: fadeInUp .8s ease forwards; }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: none; }
        }

        /* BLOG CARD */
        .post-item {
            position: relative;
            height: calc(100% - 30px);
            margin-bottom: 30px;
        }

        .post-featured-image a {
            display: block;
            border-radius: 30px;
            overflow: hidden;
        }

        .post-featured-image figure {
            margin: 0;
            position: relative;
            overflow: hidden;
        }

        .post-featured-image figure:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg, transparent 58.63%, var(--accent-color) 110.88%);
            z-index: 1;
        }

        .post-featured-image img {
            width: 100%;
            aspect-ratio: 1 / 1.02;
            object-fit: cover;
            transition: .4s ease-in-out;
        }

        /* SHINE EFFECT */
        .image-anime:after {
            content: "";
            position: absolute;
            width: 200%;
            height: 0%;
            left: 50%;
            top: 50%;
            background: rgba(255, 255, 255, .3);
            transform: translate(-50%, -50%) rotate(-45deg);
            z-index: 1;
        }

        @keyframes shine {
            0% { height: 0%; }
            50% { height: 250%; }
            100% { height: 0%; opacity: 0; }
        }

        .post-item:hover img { transform: scale(1.05); }

        .post-item:hover .image-anime:after {
            animation: shine .9s ease;
        }

        .post-item-content {
            position: absolute;
            left: 30px;
            right: 30px;
            bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            z-index: 2;
        }

        .post-item-content h2 {
            margin: 0;
            font-size: 20px;
            line-height: 1.4em;
            color: var(--white-color);
        }

        .post-item-content a {
            text-decoration: none;
            color: var(--white-color);
        }

        .post-item-content i {
            font-size: 20px;
            background: #fff;
            color: var(--accent-color);
            height: 42px;
            width: 42px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .3s ease;
        }

        .post-item:hover i {
            transform: translateX(4px);
        }

        @media (max-width: 992px) {
          .latest-blog-row {
            flex-wrap: wrap;
          }
          .latest-blog-col {
            width: 50%;
            flex: 0 0 50%;
          }
        }

        @media (max-width: 768px) {
          .latest-blog-col {
            width: 100%;
            flex: 0 0 100%;
          }
          .latest-section-title h2 {
            font-size: 36px;
          }
        }
      `}</style>

      {/* COMPONENT HTML */}
      <div className="our-blog">
        <div className="latest-blog-container">

          <div className="latest-blog-row latest-section-row">
            <div className="latest-blog-col" style={{ width: '100%', flex: '0 0 100%' }}>
              <div className="latest-section-title">
                <h3 className="latest-fadeInUp">LATEST POST</h3>
                <h2 className="latest-fadeInUp" style={{ animationDelay: ".2s" }}>
                  Our latest <span>insight blog</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="latest-blog-row">

            <div className="latest-blog-col">
              <div className="post-item">
                <div className="post-featured-image">
                  <a href="/">
                    <figure className="image-anime">
                      <img src="/post-1.jpg" alt="The Linux Threat You Need to Know" />
                    </figure>
                  </a>
                </div>

                <div className="post-item-content">
                  <h2><a href="/">The Linux Threat You Need to Know</a></h2>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="latest-blog-col">
              <div className="post-item">
                <div className="post-featured-image">
                  <a href="/">
                    <figure className="image-anime">
                      <img src="/post-2.jpg" alt="Closing Security Gaps with Innovation" />
                    </figure>
                  </a>
                </div>

                <div className="post-item-content">
                  <h2><a href="/">Closing Security Gaps with Innovation</a></h2>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="latest-blog-col">
              <div className="post-item">
                <div className="post-featured-image">
                  <a href="/">
                    <figure className="image-anime">
                      <img src="/post-3.jpg" alt="BianLian Focuses on Data Extortion" />
                    </figure>
                  </a>
                </div>

                <div className="post-item-content">
                  <h2><a href="/">BianLian Focuses on Data Extortion</a></h2>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
