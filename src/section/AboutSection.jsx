import React, { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Aktifkan animasi mengisi setiap kali halaman/section masuk viewport
            setAnimate(true);
          } else {
            // Reset ke 0% saat keluar viewport agar siap menganimasi ulang saat disorot kembali
            setAnimate(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Reset dan aktifkan ulang saat user mengklik menu navigasi #about
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const sectionStyle = {
    backgroundColor: "#1a202c", // Hitam pekat sesuai tema
    color: "white",
    padding: "80px 0",
  };

  const cardStyle = {
    backgroundColor: "#1a202c",
    border: "1px solid #0dcaf0",
    borderRadius: "15px",
    padding: "30px",
    height: "100%",
  };

  return (
    <section style={sectionStyle} id="about" ref={sectionRef}>
      {/* CSS internal untuk menangani animasi & hover */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tool-badge-item {
          transition: all 0.3s ease;
          cursor: default;
        }
        .tool-badge-item:hover {
          transform: translateY(-5px); /* Efek mengambang ke atas */
          background-color: #0dcaf0 !important; /* Warna background lebih terang */
          border-color: #0dcaf0 !important; /* Warna border biru menyala */
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3); /* Efek glow */
        }
        .tool-badge-item:hover .stat-value {
           color: #11112b !important; /* Berubah jadi hitam */
        }

        /* Track bar progress diagram skill */
        .skill-track {
          background-color: #11112b;
          border: 1px solid #1e1e3f;
          border-radius: 10px;
          height: 9px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Bar Progress Diagram Skill */
        .skill-progress-bar {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #0dcaf0 0%, #8a2be2 100%);
          box-shadow: 0 0 10px rgba(13, 202, 240, 0.45);
          position: relative;
        }

        /* Efek Shimmer Mengalir di atas progress bar */
        .skill-progress-bar::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.35) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: skillShimmer 2.2s infinite ease-in-out;
        }

        @keyframes skillShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skill-item:hover .skill-progress-bar {
          box-shadow: 0 0 16px rgba(13, 202, 240, 0.7), 0 0 8px rgba(138, 43, 226, 0.5);
          filter: brightness(1.1);
        }
      `,
        }}
      />
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>About Me</h2>
        </div>

        <div className="row g-4">
          {/* Kolom Kiri: Who I Am & Stats */}
          <div className="col-lg-6 d-flex flex-column">
            <div style={cardStyle} className="tool-badge-item mb-4">
              <h3>Who I Am</h3>
              <p className="text-secondary mt-3 stat-value">
                Saya adalah seorang Junior Front-End Developer yang sedang mendalami dunia
                pengembangan web modern. Saat ini, fokus utama saya adalah menguasai React.js dan
                mengasah kemampuan Design Graphics untuk menciptakan antarmuka pengguna yang tidak
                hanya fungsional, tetapi juga memiliki visual yang menarik. Saya sangat bersemangat
                untuk terus belajar dan menerapkan teknologi terbaru dalam proyek-proyek saya.
              </p>
            </div>

            <div className="row g-3">
              {[
                { label: "Years Experience", value: "8+" },
                { label: "Projects Completed", value: "1+" },
                { label: "Happy Clients", value: "0" },
                { label: "Awards Won", value: "1" },
              ].map((stat, index) => (
                <div className="col-6" key={index}>
                  <div
                    className="tool-badge-item"
                    style={{ ...cardStyle, textAlign: "center", padding: "20px" }}
                  >
                    <h2 className="text-second fw-bold stat-value" style={{ color: "#0dcaf0" }}>
                      {stat.value}
                    </h2>
                    <p className="small text-secondary m-0 stat-value">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Skills */}
          <div className="col-lg-6">
            <div style={cardStyle}>
              <h3 className="mb-4">My Skills</h3>
              <div>
                {[
                  { name: "React JS", level: "75%" },
                  { name: "JavaScript / TypeScript", level: "70%" },
                  { name: "HTML / CSS / Bootstrap", level: "80%" },
                  { name: "UI/UX Design", level: "75%" },
                  { name: "Adobe Illustrator", level: "75%" },
                  { name: "Figma", level: "65%" },
                ].map((skill, index) => (
                  <div className="mb-4 skill-item" key={index}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="fw-semibold" style={{ color: "#0dcaf0" }}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-progress-bar"
                        style={{
                          width: animate ? skill.level : "0%",
                          transition: animate
                            ? "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)"
                            : "none",
                          transitionDelay: animate ? `${index * 120}ms` : "0ms",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
