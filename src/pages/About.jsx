import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "40px",
        background: "linear-gradient(135deg, #0d6efd, #6f42c1)",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        About Us
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Our Doctor Appointment System helps patients book appointments
        easily and quickly with trusted doctors.
      </p>
      

      <p style={{ fontSize: "16px", opacity: "0.9", marginTop: "15px" }}>
        Fast • Secure • Reliable
      </p>
    </div>
  );
};

export default About;
