import React from "react";
import nextjsIcon from "../assets/icon/next-js.svg";
import bootstrapIcon from "../assets/icon/bootstrap.svg";
import excelIcon from "../assets/icon/excel.svg";
import figmaIcon from "../assets/icon/figma.svg";
import githubIcon from "../assets/icon/github.svg";
import IllustratorIcon from "../assets/icon/illustrator.svg";
import photoshopIcon from "../assets/icon/photoshop.svg";
import wordpressIcon from "../assets/icon/wordpress.svg";

const ResumeSection = () => {
  const sectionStyle = {
    backgroundColor: "#1a202c", // Warna biru gelap sesuai gambar About Anda
    color: "white",
    padding: "80px 0",
  };

  const cardStyle = {
    backgroundColor: "#11112b",
    border: "1px solid #1e1e3f",
    borderRadius: "15px",
    padding: "25px",
    marginBottom: "30px",
    position: "relative",
  };

  const timelinePoint = {
    width: "12px",
    height: "12px",
    backgroundColor: "#8a2be2", // Warna ungu cerah
    borderRadius: "50%",
    position: "absolute",
    left: "-37px",
    top: "30px",
    boxShadow: "0 0 10px #8a2be2",
  };

  const timelineLine = {
    position: "absolute",
    left: "-32px",
    top: "40px",
    bottom: "-50px",
    width: "2px",
    backgroundColor: "#1e1e3f",
  };

  const ToolBadge = ({ icon, name, className }) => (
    <div
      className={className}
      style={{
        backgroundColor: "#11112b",
        border: "1px solid #1e1e3f",
        borderRadius: "50px",
        padding: "8px 20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "white",
      }}
    >
      <span>{icon}</span>
      {name}
    </div>
  );

  return (
    <section style={sectionStyle} id="resume">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>My Resume</h2>
        </div>

        <div className="row mt-5">
          {/* Kolom Work Experience */}
          <div className="col-lg-6 px-5">
            <div className="d-flex align-items-center mb-4">
              <div className="p-2 rounded me-3" style={{ backgroundColor: "#8a2be2" }}>
                <i className="bi bi-briefcase-fill fs-4"></i>
              </div>
              <h3 className="m-0">Work Experience</h3>
            </div>

            <div className="position-relative">
              {/* Item 1 */}
              <div style={cardStyle} className="tool-badge-item mb-4">
                <div style={timelinePoint}></div>
                <div style={timelineLine}></div>
                <span className="badge bg-dark text-primary mb-2">2025 - Present</span>
                <h4>Full-stack Wordpress Developer</h4>
                <p className="text-primary small">Madrasah Ibtidaiyah Cikembulan</p>
                <p className="text-secondary mb-0 small">
                  Membuat Aplikasi Web yang responsive dengan menggunakan Wordpress.
                </p>
              </div>

              {/* Item 2 */}
              <div style={cardStyle} className="tool-badge-item mb-4">
                <div style={timelinePoint}></div>
                <div style={timelineLine}></div>
                <span className="badge bg-dark text-primary mb-2">2022 - Present</span>
                <h4>School Administrator</h4>
                <p className="text-primary small">Madrasah Ibtidaiyah Cikembulan </p>
                <p className="text-secondary mb-0 small">
                  Bekerja untuk kelola data pokok, manajemen Administrasi digital, Pengarsipan dan
                  Dokumentasi, dan IT Support.
                </p>
              </div>

              {/* Item 3 */}
              <div style={cardStyle} className="tool-badge-item mb-4">
                <div style={timelinePoint}></div>
                <span className="badge bg-dark text-primary mb-2">2022 - 2025</span>
                <h4>Social Media Management & Graphic Designer</h4>
                <p className="text-primary small mb-0">Karang Taruna Tunas Mekar </p>
                <p className="text-primary small">Event SUGEMA CUP</p>
                <p className="text-secondary mb-0 small">
                  Mengelola Sosial Media Karang Taruna dan mendesain konten untuk Sosial Media.
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Education */}
          <div className="col-lg-6 px-5">
            <div className="d-flex align-items-center mb-4">
              <div className="p-2 rounded me-3" style={{ backgroundColor: "#8a2be2" }}>
                <i className="bi bi-mortarboard-fill fs-4"></i>
              </div>
              <h3 className="m-0">Education</h3>
            </div>

            <div className="position-relative">
              {/* Item 1 */}
              <div style={cardStyle} className="tool-badge-item mb-4">
                <div style={timelinePoint}></div>
                <div style={timelineLine}></div>
                <span className="badge bg-dark text-primary mb-2">2025 - Present</span>
                <h4>Pursuing a Bachelor’s Degree in Computer Science</h4>
                <p className="text-primary small">Universitas Siber Muhammadiyah</p>
                <p className="text-secondary mb-0 small">
                  Bertujuan untuk lulus dengan predikat terbaik. Fokus utama saya pada pengembangan
                  web dan front end Developer sesuai dengan keahlian yang sedang Anda pelajari.
                </p>
              </div>

              {/* Item 2 */}
              <div style={cardStyle} className="tool-badge-item mb-4">
                <div style={timelinePoint}></div>
                <span className="badge bg-dark text-primary mb-2">2018-2020</span>
                <h4>Professional Certification in Informatics Computer</h4>
                <p className="text-primary small">LP3I Tasikmalaya</p>
                <p className="text-secondary mb-0 small">
                  Meskipun latar belakang pendidikan saya Informatika, selama masa studi saya lebih
                  banyak mendalami bidang desain grafis dan aplikasi perkantoran. Saya lebih
                  tertarik pada bagaimana teknologi digunakan untuk menciptakan komunikasi visual
                  yang efektif dan meningkatkan produktivitas administrasi menggunakan alat seperti
                  Microsoft Excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-0 pt-0">
        {/* CSS internal untuk menangani Hover */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .tool-badge-item {
          transition: all 0.3s ease;
          cursor: default;
        }
        .tool-badge-item:hover {
          // transform: translateY(-5px); /* Efek mengambang ke atas */
          background-color: #0dcaf0 !important; /* Warna background lebih terang */
          border-color: #0dcaf0 !important; /* Warna border biru menyala */
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3); /* Efek glow */
          color: #11112b !important;
        }
      `,
          }}
        />
        <h3 className="text-center mb-4" style={{ color: "#ffffff", fontWeight: "bold" }}>
          Tools & Technologies
        </h3>

        <div className="d-flex flex-wrap justify-content-center gap-3 ">
          <ToolBadge className="tool-badge-item" icon="⚛️" name="React" />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={bootstrapIcon} alt="Bootstrapicon" width="20" />}
            name="Bootstrap CSS"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={nextjsIcon} alt="Next.js icon" width="20" />}
            name="Next.js"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={figmaIcon} alt="Figma Icon" width="20" />}
            name="Figma"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={photoshopIcon} alt="Photoshop Icon" width="20" />}
            name="Photoshop"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={IllustratorIcon} alt="Illustrator Icon" width="20" />}
            name="Illustrator"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={githubIcon} alt="Github Icon" width="20" />}
            name="Github"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={excelIcon} alt="Excel Icon" width="20" />}
            name="Excel"
          />
          <ToolBadge
            className="tool-badge-item"
            icon={<img src={wordpressIcon} alt="Wordpress Icon" width="20" />}
            name="Wordpress"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
