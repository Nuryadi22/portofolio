import React, { useState } from "react";
import MyLogo from "../assets/icon/nyd.png";

const Navbar = () => {
  // State untuk melacak menu mana yang sedang di-hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Portofolio", href: "#portofolio" },
  ];

  // Fungsi untuk mendapatkan style link secara dinamis
  const getLinkStyle = (index) => ({
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    // Perubahan warna saat di-hover
    backgroundColor: hoveredIndex === index ? "#0dcaf0" : "transparent",
    color: hoveredIndex === index ? "#1a202c" : "#ffffff",
    display: "block",
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img
            src={MyLogo}
            alt="nyd"
            height="20" // Atur tinggi logo agar pas dengan navbar
            className="me-2"
          />
        </a>
        {/* TOMBOL HAMBURGER (Muncul hanya di Layar Kecil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: "20px" }}>
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  style={getLinkStyle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-lg-3">
              <a
                className="btn btn-outline-info"
                href="https://wa.me/qr/5TM233HYXP7IO1"
                target="_blank"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
