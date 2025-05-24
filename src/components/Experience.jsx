import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Web-Developer",
    company: "Cognifyz",
    date: "Aug 2023 – Sep 2023",
    iconBg: "#fff",
    iconColor: "#1a237e",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Bharat Intern",
    date: "Nov 2023 – Dec 2023",
    iconBg: "#1a237e",
    iconColor: "#fff",
    points: [
      "Architecting and implementing full-stack web applications using modern MERN stack technologies.",
      "Leading frontend development with React.js, incorporating responsive design patterns and modern UI/UX principles.",
      "Building robust backend systems with Node.js, Express, and MongoDB for scalable data management.",
      "Implementing CI/CD pipelines and maintaining code quality through comprehensive testing and reviews.",
    ],
  },
];

function ExperienceCard({ experience, index }) {
  // Determine positioning class based on role title
  const getPositionClass = () => {
    const title = experience.title.toLowerCase();
    
    // Full Stack Developer always goes to left
    if (title.includes('full-stack') || title.includes('full stack')) {
      return 'fullstack';
    }
    
    // For other positions, alternate based on index
    return index % 2 === 0 ? 'right' : 'left';
  };

  const positionClass = getPositionClass();

  return (
    <div className={`timeline-row ${positionClass}`}>
      <div
        className="timeline-dot"
        style={{ 
          background: experience.iconBg, 
          color: experience.iconColor
        }}
      >
        <span role="img" aria-label="laptop" style={{ fontSize: 28 }}>
          💻
        </span>
      </div>
      <div className="timeline-content">
        <div className="timeline-date">{experience.date}</div>
        <div className="timeline-card">
          <h3 className="timeline-role">{experience.title}</h3>
          <h4 className="timeline-company">{experience.company}</h4>
          <ul className="timeline-tasks">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="experience-section">
      <h4 className="experience-subtitle">WHAT I HAVE DONE SO FAR</h4>
      <h1 className="experience-title">Work Experience.</h1>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <ExperienceCard 
            experience={exp} 
            index={idx}
            key={`${exp.company}-${idx}`} 
          />
        ))}
      </div>
    </section>
  );
}