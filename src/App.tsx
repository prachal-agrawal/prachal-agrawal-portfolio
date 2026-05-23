import { useState } from 'react'
import profilePhoto from './assets/prachalPhoto.jpeg'
import './App.css'

const achievements = [
  'Winner of Hackathon 2025 at Zenarate',
  'Best Performer in Team of the Year 2024',
  'GATE Qualified 2022',
]

const skills = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java (DSA)', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React JS', 'Redux Toolkit', 'Redux', 'FastAPI', 'Formik', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    items: ['AWS Console', 'Git', 'GitHub', 'Storybook', 'Postman', 'Jira', 'Cursor'],
  },
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10k+', label: 'Lines Migrated' },
  { value: '50%', label: 'Perf. Boost' },
  { value: '40%', label: 'Faster Delivery' },
]

const experiences = [
  {
    role: 'Software Development Engineer - 2',
    company: 'Zenarate',
    period: 'Mar 2026 - Present',
    points: [
      'Leading the Conversation Builder lifecycle across creation, editing, authoring, publishing, practice flows, and scorecard generation.',
      'Driving frontend and backend architecture for scalable conversational workflows with smooth system integration.',
      'Reduced redundant database calls during dialog flow migration by introducing an additional API filter.',
    ],
  },
  {
    role: 'Software Development Engineer - 1',
    company: 'Zenarate',
    period: 'Feb 2024 - Feb 2026',
    points: [
      'Migrated Roles and Stories pages to TypeScript, reducing runtime errors by 30%.',
      'Owned the Skills page frontend while collaborating with backend teams on data flow and mapping.',
      'Built 15+ Storybook micro-components for a Micro-Frontend architecture, improving reuse by 40%.',
      'Developed a React Workbench for practice sessions, improving performance by 50% with accessible UX.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Zenarate',
    period: 'Feb 2023 - Jan 2024',
    points: [
      'Migrated 10,000+ lines of legacy PHP to React.js, reducing page load times by 40%.',
      'Owned 4+ core management modules including Users, Stories, Brands, and Assignments.',
      'Architected a React 18 codebase with React Router v6, Formik, and Redux Toolkit.',
    ],
  },
]

const projects = [
  {
    title: 'Gamification and Engagement Boosters',
    stack: 'React.js',
    description:
      'Built onboarding walkthroughs and leaderboard-driven learning flows for a banking domain product.',
  },
  {
    title: 'AI Coach Simulation Platform',
    stack: 'React.js, TypeScript',
    description:
      'Integrated enterprise SSO, protected routes, role-based UI rendering, and automated onboarding flows.',
  },
  {
    title: 'MedKart - Online Pharmacy Platform',
    stack: 'React.js, FastAPI, MySQL',
    description:
      'Created medicine search, catalog browsing, cart, checkout, order tracking, and role-based frontend flows.',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Prachal Agrawal home">
          pa<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? 'menu-overlay-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="eyebrow">Open to new opportunities</p>
          <h1>
            Prachal
            <span>Agrawal</span>
          </h1>
          <p className="role-text">Software Development Engineer - 2</p>
          <p className="hero-copy">
            Frontend Engineer with 3+ years building scalable, production-grade web applications.
            Currently <strong>SDE-2 at Zenarate</strong>, leading the Conversation Builder platform
            and owning architecture across frontend and backend for complex conversational workflows.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:agrawalprachal@gmail.com">
              Get In Touch
            </a>
            <a
              className="secondary-button"
              href="#projects"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-label="Profile photo">
          <img src={profilePhoto} alt="Prachal Agrawal" />
          <div className="portrait-glow" aria-hidden="true" />
        </div>
      </section>

      <section className="stats" aria-label="Professional highlights">
        {stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Product-focused engineer building clean, scalable React systems.</h2>
        </div>
        <div className="about-card">
          <p>
            I specialize in frontend architecture, reusable component systems, accessible
            workflows, and performance-focused React applications. I enjoy taking complex product
            flows and turning them into crisp, reliable user experiences.
          </p>
          <div className="achievement-list">
            {achievements.map((achievement) => (
              <article key={achievement} className="achievement-card">
                {achievement}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid" id="skills">
        <div>
          <p className="section-label">Technical Arsenal</p>
          <h2>Skills & Tools</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div>
          <p className="section-label">Experience</p>
          <h2>Engineering ownership at Zenarate.</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.role} className="timeline-card">
              <div className="timeline-heading">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company} - Gurugram, India</p>
                </div>
                <span>{experience.period}</span>
              </div>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="projects">
        <div>
          <p className="section-label">Projects</p>
          <h2>Selected work across learning, SSO, and healthcare flows.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <span>{project.stack}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="education-card">
        <p className="section-label">Education</p>
        <h2>B.Tech in Computer Science</h2>
        <p>Dr. A.P.J Abdul Kalam Technical University, Mathura - 9.18 SGPA</p>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build something clean, scalable, and useful.</h2>
        <p>
          Open to frontend engineering opportunities, React architecture work, and impactful
          product teams.
        </p>
        <div className="contact-actions">
          <a href="mailto:agrawalprachal@gmail.com">agrawalprachal@gmail.com</a>
          <a href="tel:+918279744028">+91 82797 44028</a>
        </div>
      </section>
    </main>
  )
}

export default App
