'use client'

import React, { useState } from "react";

const HighlightButton = ({ children = "Talk to us" }) => {
    const [hover, setHover] = useState(false);

    /* ================================
       VARIABLES
    ================================= */
    const vars = {
        accent: "#4D51AB",
        accentSecondary: "#55CEE3",
        white: "#FFFFFF",
        text: "#707070",
    };

    /* ================================
       WRAPPER (button base)
    ================================= */
    const btnStyle = {
        position: "relative" as const,
        display: "inline-block",
        padding: "17px 60px 17px 30px",
        background: hover ? "transparent" : vars.white,
        color: hover ? vars.white : vars.accent,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "1em",
        border: "none",
        borderRadius: "100px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.4s ease-in-out",
        zIndex: 1,
    };

    /* ================================
       ::before  → ARROW ICON
       Implemented using <span>
    ================================= */
    const beforeStyle = {
        position: "absolute" as const,
        fontFamily: '"Font Awesome 6 Free"',
        fontWeight: 900,
        top: "50%",
        right: "0",
        transform: hover ? "translate(-27px, -50%)" : "translate(-30px, -50%)",
        fontSize: "20px",
        color: hover ? vars.white : vars.accent,
        transition: "all 0.4s ease-in-out",
        pointerEvents: "none" as const,
    };

    /* ================================
       ::after → GRADIENT BACKGROUND
       Implemented using <span>
    ================================= */
    const afterStyle = {
        position: "absolute" as const,
        top: 0,
        left: hover ? 0 : "auto",
        right: hover ? "auto" : 0,
        width: hover ? "100%" : "0",
        height: "100%",
        background: `linear-gradient(90.15deg, ${vars.accent} 1.15%, ${vars.accentSecondary} 98.84%)`,
        borderRadius: "100px",
        transition: "0.4s ease-in-out",
        zIndex: -1,
    };

    return (
        <button
            style={btnStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* ::after replacement */}
            <span style={afterStyle}></span>

            {/* TEXT */}
            {children}

            {/* ::before replacement */}
            <span
                style={beforeStyle}
                className="fa-solid"
                aria-hidden="true"
            >
                {"\uf0a9"}
            </span>
        </button>
    );
};

export default HighlightButton;