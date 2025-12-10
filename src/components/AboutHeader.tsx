import React from "react";

const AboutHeader = () => {
  return (
    <>
      <style>{`
        /* ------------ Root Variables ------------ */
        :root {
            --primary-color: #010535;
            --secondary-color: #F2F2F5;
            --text-color: #DADAE2;
            --accent-color: #4D51AB;
            --accent-secondary-color: #55CEE3;
            --white-color: #FFFFFF;

            --header-bg-start: #1a3d8f;
            --header-bg-end: #3e65c0;

            --header-overlay-top: rgba(1,5,53,0.28);
            --header-overlay-bottom: rgba(1,5,53,0.85);

            --underline-color: #ffdd57;
        }


        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-header {
            padding: 100px 20px 40px;
            background: linear-gradient(120deg, var(--header-bg-start), var(--header-bg-end)),
                url('../images/page-header-bg.jpg') center/cover no-repeat;
            color: #fff;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-radius: 0 0 50% 50% / 0 0 12% 12%;
            animation: fadeUp 0.8s ease-out;
            box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        }

        .page-header::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                270deg,
                var(--header-overlay-top) 40%,
                var(--header-overlay-bottom) 100%
            );
            z-index: 0;
        }

        .page-header h1 {
            font-size: 3.4rem;
            font-weight: 800;
            margin-bottom: 15px;
            position: relative;
            color: #fff;
        }

        .page-header h1::after {
            content: "";
            width: 70px;
            height: 4px;
            background: var(--underline-color);
            display: block;
            margin: 14px auto 0;
            border-radius: 2px;
            transition: width 0.35s ease;
        }

        .page-header h1:hover::after {
            width: 120px;
        }

        .page-header nav {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            z-index: 2;
            position: relative;
        }

        .breadcrumb {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin: 15px 0 0;
            justify-content: center;

            --bs-breadcrumb-item-padding-x: 0.5rem;
        }

        .breadcrumb-item {
            color: #e0e0e0;
            transition: color 0.3s ease;
        }

        .breadcrumb-item a {
            color: #ffffff;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }

        .breadcrumb-item a:hover {
            opacity: 0.75;
        }

        .breadcrumb-item.active {
            color: #fff !important;
            font-weight: 600;
        }

        .breadcrumb-item + .breadcrumb-item::before {
            content: "›";
            padding: 0 0.4rem;
            color: #fff;
            opacity: 0.85;
        }

        ::-webkit-scrollbar {
            width: 7px;
            background-color: var(--secondary-color);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(
                180deg,
                var(--accent-color) 1%,
                var(--accent-secondary-color) 100%
            );
        }

        ::-webkit-scrollbar-track {
            background-color: var(--secondary-color);
        }
      `}</style>

      <div className="page-header">
        <h1>About Us</h1>

        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">About Us</li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default AboutHeader;
