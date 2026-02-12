import React from "react";

const AboutSection = () => {
  const sectionStyle = {
    backgroundColor: "#1a202c", // Hitam pekat sesuai gambar
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

  const progressBarStyle = (width) => ({
    width: width,
    height: "8px",
    background: "linear-gradient(90deg, #0dcaf0 0%, #8a2be2 100%)",
    borderRadius: "5px",
  });

  return (
    <section style={sectionStyle} id="about">
      {/* CSS internal untuk menangani Hover */}
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
              <h3>My Skills</h3>
              <div className="mt-4">
                {[
                  { name: "React JS", level: "75%" },
                  { name: "JavaScript / TypeScript", level: "70%" },
                  { name: "HTML / CSS / Bootstrap", level: "75%" },
                  { name: "UI/UX Design", level: "85%" },
                  { name: "Adobe Illustrator", level: "80%" },
                  { name: "Figma", level: "80%" },
                ].map((skill, index) => (
                  <div className="mb-4" key={index}>
                    <div className="d-flex justify-content-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div style={{ backgroundColor: "#0dcaf0", borderRadius: "5px" }}>
                      <div style={progressBarStyle(skill.level)}></div>
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
