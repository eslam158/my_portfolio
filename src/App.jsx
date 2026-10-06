import "./App.css";

function App() {
  const projects = [
    {
      number: "01",
      title: "Cairo Metro",
      description:
        "A Flutter mobile application for navigating Cairo Metro routes, calculating stations, travel time, direction, and finding nearby stations.",
      tech: ["Flutter", "Dart", "Geolocator", "SharedPreferences"],
      featured: true,
      github: "https://github.com/eslam158/mono-metro_app",
      playStore:
        "https://play.google.com/store/apps/details?id=com.shimaakhaled.monometro",
    },
    {
      number: "02",
      title: "Notes App",
      description:
        "A modern Flutter notes application with local SQLite storage using Floor, supporting CRUD operations, optional locations, and shake-to-delete functionality.",
      tech: ["Flutter", "Dart", "Floor", "SQLite", "Sensors Plus"],
      github: "https://github.com/eslam158/notes_app",
    },
    {
      number: "03",
      title: "News App",
      description:
        "A Flutter news application that fetches and displays news articles from REST APIs with category-based browsing.",
      tech: ["Flutter", "Dart", "Dio", "REST API"],
      github: "https://github.com/eslam158/News_app",
    },
    {
      number: "04",
      title: "Language Learning App",
      description:
        "A Flutter-based language learning application that helps users learn Japanese vocabulary through categories, images, and audio pronunciation.",
      tech: ["Flutter", "Dart", "Audio", "UI"],
      github: "https://github.com/eslam158/Language_learning_App",
    },
    {
      number: "05",
      title: "E-Commerce App",
      description:
        "A Flutter e-commerce application with product browsing, authentication, and Firebase integration.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/eslam158/e-commerce-app",
    },
  ];

  const skills = [
    "Flutter",
    "Dart",
    "REST APIs",
    "JSON Parsing",
    "Firebase",
    "SQLite",
    "Floor",
    "Responsive UI",
    "Git & GitHub",
    "Python",
    "C++",
    "Java",
    "SQL",
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="logo">
          EA.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:eslamatefabdelgawad@gmail.com"
          className="nav-button"
        >
          Let's Talk
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-small">MOBILE APPLICATION DEVELOPER</p>

            <h1>
              Eslam
              <br />
              <span>Atef.</span>
            </h1>

            <p className="hero-description">
              I build modern mobile applications with Flutter & Dart,
              focusing on clean UI, smooth experiences and practical
              solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="profile-frame">
              <img
                src="/images/PROFILE.png"
                alt="Eslam Atef"
                className="profile-image"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>

          <h2>
            Building mobile experiences
            <br />
            that feel <span>simple.</span>
          </h2>

          <p className="section-text">
            I'm a Computer Science student and Mobile Application Developer
            focused on Flutter and Dart. I enjoy turning ideas into clean,
            responsive and functional mobile applications. I'm continuously
            improving my skills through projects, training and practical
            development.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <p className="section-label">02 — SKILLS</p>

          <h2>
            Tools I use to
            <br />
            <span>build.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <p className="section-label">03 — PROJECTS</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub <span>↗</span>
                    </a>

                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Google Play <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <p className="section-label">04 — EXPERIENCE</p>

          <h2>
            Experience &<br />
            <span>training.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2026 — PRESENT</span>

              <div>
                <h3>Digital Egypt Pioneers Initiative</h3>

                <p>Flutter / Mobile Application Development</p>

                <span className="timeline-description">
                  Practical training focused on Flutter, Dart and mobile
                  application development.
                </span>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">OCT — DEC 2025</span>

              <div>
                <h3>Concentrix</h3>

                <p>Call Center Agent</p>

                <span className="timeline-description">
                  Developed communication, problem-solving, teamwork and
                  customer service skills.
                </span>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">JUL — AUG 2025</span>

              <div>
                <h3>AI & Machine Learning Training</h3>

                <p>Modern Academy</p>

                <span className="timeline-description">
                  Practical training in Python, data preprocessing, machine
                  learning, classification and regression.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section">
          <p className="section-label">05 — EDUCATION</p>

          <div className="education-card">
            <span>2023 — 2027</span>

            <h3>Modern Academy</h3>

            <p>Bachelor of Computer Science</p>

            <div className="education-details">
              <span>Senior Student</span>
              <span>GPA 3.40</span>
              <span>Excellence</span>
              <span>Expected Graduation: 2027</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <p className="section-label">06 — CONTACT</p>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>

          <p className="section-text">
            Have a project, internship opportunity or just want to connect?
            Feel free to reach out.
          </p>

          <div className="contact-links">
            <a
              href="mailto:eslamatefabdelgawad@gmail.com"
              className="contact-link"
            >
              <span>Email</span>
              <strong>eslamatefabdelgawad@gmail.com</strong>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/eslam-atef-abdelgawad"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <strong>/eslam-atef-abdelgawad</strong>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/eslam158"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <strong>github.com/eslam158</strong>
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/201220092538"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>WhatsApp</span>
              <strong>+20 122 009 2538</strong>
              <span>↗</span>
            </a>
          </div>

          <div className="cv-buttons">
            <a
              href="/Eslam_mobile_developer_CV.pdf"
              download
              className="cv-button"
            >
              Download CV <span>↓</span>
            </a>

            <a
              href="/Eslam_mobile_developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-view-button"
            >
              View CV <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Eslam Atef</div>

        <div>Mobile Application Developer</div>

        <a href="#">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;