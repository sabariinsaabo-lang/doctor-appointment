import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#0d6efd" }}>About Us</h1>

      <p style={{ fontSize: "16px", color: "#555" }}>
        Welcome to our Doctor Appointment System.
         
      This platform helps patients
        easily book appointments with qualified doctors online.
      
      <p>
        Our goal is to make healthcare access simple, fast, and reliable for
        everyone.
      </p>
      </p>
    </div>
  );
};

export default About;
