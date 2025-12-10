import React from "react";

export default function LeadershipSection() {
    return (
        <section
            className="leadership-section"
            style={{
                padding: "50px 20px",
                backgroundColor: "rgb(188 199 215 / 25%)",
                fontFamily: '"Plus Jakarta Sans", sans-serif'
            }}
        >

            {/* Title */}
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#083482",
                    marginBottom: "8px"
                }}
            >
                Meet Our Leadership
            </h1>

            <p
                className="subtitle"
                style={{
                    textAlign: "center",
                    fontSize: "1rem",
                    color: "#555",
                    marginBottom: "25px"
                }}
            >
                Visionary minds driving innovation and success
            </p>

            {/* Profile Card */}
            <div
                className="profile-card"
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                    padding: "20px",
                    gap: "20px",
                    margin: "0 auto 20px",
                    maxWidth: "900px"
                }}
            >
                <img
                    src="https://via.placeholder.com/200x200.png?text=Profile+Photo"
                    alt="Profile"
                    style={{
                        width: "140px",
                        height: "140px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        flexShrink: 0
                    }}
                />

                {/* Profile Info */}
                <div className="profile-info">
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "#083482",
                            margin: 0,
                            textAlign: "center"
                        }}
                    >
                        Alex Johnson
                    </h2>

                    <h3
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#083482",
                            marginBottom: "12px",
                            textAlign: "center"
                        }}
                    >
                        Chief Executive Officer
                    </h3>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            color: "#444",
                            marginBottom: "10px"
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus vel vehicula lacus. Fusce bibendum, nisl ut cursus
                        rhoncus, arcu metus dapibus magna, non tempus eros nisl at
                        nisl. Proin porta vel lacus ac viverra.
                    </p>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            color: "#444",
                            marginBottom: "10px"
                        }}
                    >
                        Curabitur euismod, lacus a malesuada ultrices, sapien libero
                        egestas nisl, eget sollicitudin justo erat id elit. Integer
                        dapibus risus sed odio bibendum, at luctus libero
                        sollicitudin.
                    </p>
                </div>
            </div>

        </section>
    );
}
