import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "40px",
        background: "linear-gradient(135deg, #198754, #20c997)",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "25px" }}>
        Contact Us
      </h1>

      <p style={{ fontSize: "18px" }}>📧 GroupC@gmail.com</p>
      <p style={{ fontSize: "18px" }}>📞 +252 619367039</p>
      <p style={{ fontSize: "18px" }}>📍 Mogadishu, Somalia</p>
    </div>
  );
};

export default Contact;
