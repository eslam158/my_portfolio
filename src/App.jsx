function App() {
  const projects = [
    {
      number: "01",
      title: "Cairo Metro",
      description:
        "A Flutter mobile application for navigating Cairo Metro routes, calculating stations, travel time, direction, and finding nearby stations.",
      tech: ["Flutter", "Dart", "Geolocator", "SharedPreferences"],
      featured: true,
      link: "https://play.google.com/store/apps/details?id=com.shimaakhaled.monometro",
      linkText: "Google Play",
    },
    {
      number: "02",
      title: "Notes App",
      description:
        "A modern notes application built with Flutter, focused on organizing and managing notes with local database storage.",
      tech: ["Flutter", "Dart", "SQLite", "Floor"],
    },
    {
      number: "03",
      title: "Weather App",
      description:
        "A weather application that retrieves weather information from an external API and presents it through a clean responsive interface.",
      tech: ["Flutter", "Dart", "REST API", "WeatherAPI"],
    },
    {
      number: "04",
      title: "Music App",
      description:
        "A simple and interactive music player application for playing different tunes with a clean mobile interface.",
      tech: ["Flutter", "Dart", "Audio Playback"],
    },
    {
      number: "05",
      title: "E-Commerce App",
      description:
        "A full-featured e-commerce mobile application with authentication, products, cart functionality, and Firebase integration.",
      tech: ["Flutter", "Firebase", "Firestore", "Firebase Auth"],
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

        <section id="projects" className="section projects-section">
          <p className="section-label">03 — PROJECTS</p>

          <h2>
            Selected
            <br />
            <span>work.</span>
          </h2>

          <div className="projects-container">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  {project.featured && (
                    <span className="featured-label">
                      FEATURED PROJECT
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.linkText}
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-label">04 — EXPERIENCE</p>

          <h2>
            Experience &
            <br />
            <span>training.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">
                2026 — PRESENT
              </span>

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
              <span className="timeline-date">
                OCT — DEC 2025
              </span>

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
              <span className="timeline-date">
                JUL — AUG 2025
              </span>

              <div>
                <h3>AI & Machine Learning Training</h3>

                <p>Modern Academy</p>

                <span className="timeline-description">
                  Practical training in Python, data preprocessing,
                  machine learning, classification and regression.
                </span>
              </div>
            </div>
          </div>
        </section>

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
              rel="noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <strong>/eslam-atef-abdelgawad</strong>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/eslam158"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <strong>github.com/eslam158</strong>
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/201220092538"
              target="_blank"
              rel="noreferrer"
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
              Download CV
              <span>↓</span>
            </a>

            <a
              href="/Eslam_mobile_developer_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="cv-view-button"
            >
              View CV
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Eslam Atef</div>

        <div>Mobile Application Developer</div>

        <a href="#">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;