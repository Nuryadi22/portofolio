import React from "react";

const HeroSection = () => {
  const heroStyle = {
    height: "100vh",
    backgroundColor: "#0f0f0f", // Hitam pekat sesuai gambar
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop")', // Gambar meja kerja dark
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10%",
  };

  const nameStyle = {
    fontSize: "clamp(2.5rem, 12vw, 5rem)",
    fontWeight: "bold",
    lineHeight: "1",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  return (
    <section style={heroStyle} id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ letterSpacing: "5px", fontWeight: "300" }}>NURYADI</h4>
            <h1 style={nameStyle}>
              WEB <br /> DEVELOPER
            </h1>
            <p className="lead mt-3" style={{ fontSize: "1.2rem", color: "#ffffff" }}>
              Front-End Developer | React Js Developer | Design Graphics
            </p>

            <div className="mt-5">
              <a className="btn btn-outline-light rounded-pill px-4 py-2 me-3" href="#resume">
                Resume
              </a>
              <a className="btn btn-outline-light rounded-pill px-4 py-2" href="#portofolio">
                Portfolio
              </a>
            </div>

            {/* Tambahan Teks Find Me On */}
            <div className="mt-5 d-flex align-items-center gap-3">
              <p
                className="m-0"
                style={{ fontSize: "1.1rem", marginBottom: "15px", color: "#ffffff" }}
              >
                Find Me On:
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 fs-3" style={{ color: "#adb5bd" }}>
                <a
                  href="https://www.linkedin.com/in/nuryadi-805a7a388/"
                  target="_blank"
                  className="text-reset"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-reset">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-reset">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-reset">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
