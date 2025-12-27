import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "40px",
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Contact Us
      </h1>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={inputStyle}
        ></textarea>

        <button style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px"
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  backgroundColor: "#ffc107",
  color: "#000",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Contact;
