import React, { useState } from "react";
import GambarSugema from "../assets/gambar/sugema.jpg";
import GambarMi from "../assets/gambar/web-mi-cikembulan.jpg";
import GambarPortofolio from "../assets/gambar/web-portofolio.jpg";
import { Link } from "react-bootstrap-icons";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Website MI Cikembulan",
      category: "Web Development",
      sub: "Wordpress / React",
      Image: GambarMi,
      color: "#2d1b5e",
      Link: "https://micikembulan.sch.id/",
    },
    {
      title: "SUGEMA CUP",
      category: "Design Graphics",
      sub: "Branding / Design",
      Image: GambarSugema,
      color: "#5e1b42",
      Link: "https://www.instagram.com/sugema.cup?igsh=MnZ5b2I5dHFmNjRl",
    },
    {
      title: "My Portofolio",
      category: "React Projects",
      sub: "React Native / Mobile",
      Image: GambarPortofolio,
      color: "#1b3a5e",
      Link: "#",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      style={{ backgroundColor: "#08081a", color: "white", padding: "80px 0" }}
      id="portofolio"
    >
      {/* CSS Terintegrasi */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1e1e3f;
          background-color: #11112b;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          cursor: pointer;
          height: 100%;
        }

        /* Efek Mengambang saat Hover */
        .portfolio-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4);
          border-color: #8a2be2;
        }

        .card-image-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 4rem;
          transition: transform 0.5s ease;
        }
        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ini penting agar gambar tidak gepeng */
        }
        .portfolio-card:hover .card-image-container {
          transform: scale(1.05);
        }

        .card-body-content {
          padding: 20px;
          background-color: #11112b;
          border-top: 1px solid #1e1e3f;
        }

        .view-btn {
          margin-top: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .view-btn {
          opacity: 1;
        }
      `,
        }}
      />

      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>My Portfolio</h2>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {["All", "Web Development", "Design Graphics", "React Projects"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn btn-sm px-4 py-2"
              style={{
                backgroundColor: filter === cat ? "#5e5ce6" : "#161632",
                color: "white",
                border: "none",
                borderRadius: "20px",
                transition: "0.3s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="portfolio-card">
                {/* Visual Area */}
                <div className="card-image-container" style={{ backgroundColor: project.color }}>
                  <img
                    src={project.Image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Teks Keterangan (Selalu Terlihat) */}
                <div className="card-body-content text-center">
                  <h5 className="fw-bold mb-1">{project.title}</h5>
                  <p className="text-secondary small mb-0">{project.sub}</p>

                  {/* Tombol yang hanya muncul saat hover untuk interaksi ekstra */}
                  <div className="view-btn">
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <button className="btn btn-sm btn-outline-primary rounded-pill px-4">
                        Detail Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
