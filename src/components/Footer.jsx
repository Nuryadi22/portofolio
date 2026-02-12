import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#050510", // Lebih gelap dari section sebelumnya untuk penutup
    color: "white",
    padding: "20px 0 20px 0",
    borderTop: "1px solid #1e1e3f",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div className="container">
        {/* Hak Cipta */}
        <div className="text-center text-secondary small d-flex">
          <p className="mb-0">
            &copy; {currentYear} <strong>Nuryadi</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
