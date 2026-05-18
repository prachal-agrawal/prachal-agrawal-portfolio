import './App.css'

const achievements = [
  'Winner of Hackathon 2025 at Zenarate',
  'Best Performer in Team of the Year 2024',
  'GATE Qualified 2022',
]

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'Architecture',
    items: ['Micro-Frontends', 'React Router v6', 'Storybook', 'WCAG', 'JAWS'],
  },
  {
    title: 'Backend & Data',
    items: ['SQL', 'MySQL', 'Redis', 'FastAPI', 'JWT Integration'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Jira', 'AWS Console', 'Postman', 'Cursor'],
  },
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
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Prachal Agrawal home">
          PA
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="eyebrow">Frontend Engineer - React.js, TypeScript, Micro-Frontends</p>
          <h1>Building scalable, accessible product workflows for modern web teams.</h1>
          <p className="hero-copy">
            I am Prachal Agrawal, a Gurugram-based frontend engineer focused on
            production-grade React applications, maintainable architecture, and high-performing
            user experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:agrawalprachal@gmail.com">
              Get in touch
            </a>
            <a
              className="secondary-button"
              href="https://github.com/prachal-agrawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile highlights">
          <div className="avatar" aria-hidden="true">
            PA
          </div>
          <h2>Prachal Agrawal</h2>
          <p>Software Development Engineer at Zenarate</p>
          <div className="profile-links">
            <a href="mailto:agrawalprachal@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/prachal-agrawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/prachal-agrawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </aside>
      </section>

      <section className="stats" aria-label="Professional highlights">
        <article>
          <strong>10,000+</strong>
          <span>legacy PHP lines migrated to React</span>
        </article>
        <article>
          <strong>50%</strong>
          <span>performance improvement in React Workbench</span>
        </article>
        <article>
          <strong>15+</strong>
          <span>micro-components built for Storybook</span>
        </article>
      </section>

      <section className="section-grid">
        <div>
          <p className="section-label">Achievements</p>
          <h2>Recognized for ownership, impact, and consistency.</h2>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <article key={achievement} className="achievement-card">
              {achievement}
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="section-label">Skills</p>
          <h2>Practical tools for building reliable frontend systems.</h2>
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
          <h2>Growing product ownership across engineering roles at Zenarate.</h2>
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
          <h2>Selected work across enterprise learning, SSO, and healthcare flows.</h2>
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
        <h2>Let us build something clean, scalable, and useful.</h2>
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
