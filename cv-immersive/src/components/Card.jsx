import React from 'react';
import cvData from '../data/cvDataLoader.js';

const Card = ({
  symbol = '✧',
  title = '',
  description = '',
  sectionType = null,
  sectionData = null,
  children = null
}) => {
  // Render additional content based on section type
  const renderSectionContent = () => {
    if (!sectionType) return null;

    switch (sectionType) {
      case 'profile':
        return (
          <div className="cv-profile">
            <h2>{cvData.profile.name}</h2>
            <p className="cv-title">{cvData.profile.title}</p>
            <div className="cv-badges">
              {cvData.profile.badges.map((badge, i) => (
                <span key={i} className="cv-badge">{badge}</span>
              ))}
            </div>
            <p className="cv-stats">
              {cvData.profile.experience} | {cvData.profile.repositories}+ repos | {cvData.profile.location}
            </p>
          </div>
        );

      case 'skills':
        return (
          <div className="cv-skills">
            {cvData.skills.categories.slice(0, 4).map((cat, i) => (
              <div key={i} className="skill-category" style={{ borderColor: cat.color }}>
                <h3 style={{ color: cat.color }}>{cat.name}</h3>
                <div className="skill-list">
                  {cat.skills.slice(0, 4).map((skill, j) => (
                    <span key={j} className="skill-item">
                      {skill.name} <small>{skill.level}%</small>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="cv-experience">
            {cvData.experience.periods.slice(0, 3).map((period, i) => (
              <div key={i} className="exp-period">
                <span className="exp-years">{period.years}</span>
                <span className="exp-title">{period.title}</span>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="cv-projects">
            {cvData.projects.featured.filter(p => p.highlight).slice(0, 3).map((project, i) => (
              <div key={i} className="project-card">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="cv-achievements">
            {cvData.achievements.trophies.filter(t => t.rarity === 'legendary' || t.rarity === 'epic').slice(0, 4).map((trophy, i) => (
              <div key={i} className={`trophy trophy-${trophy.rarity}`}>
                <span className="trophy-name">{trophy.name}</span>
                <span className="trophy-desc">{trophy.description}</span>
              </div>
            ))}
          </div>
        );

      case 'lab':
        return (
          <div className="cv-lab">
            <p className="lab-hint">[?] Try typing "hire" or "coffee"</p>
            <p className="lab-hint">[?] Konami Code: Up Up Down Down Left Right Left Right B A</p>
            <p className="lab-hint">[?] Click logo 10 times or shake mouse rapidly</p>
          </div>
        );

      case 'contact':
        return (
          <div className="cv-contact">
            <p className="contact-status">{cvData.contact.status}</p>
            <div className="contact-links">
              {cvData.contact.links.slice(0, 4).map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="work-modes">
              {cvData.contact.workModes.map((mode, i) => (
                <span key={i} className="work-mode">{mode}</span>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`card ${sectionType ? `card-${sectionType}` : ''}`}>
      {symbol && <span className="cosmic-symbol">{symbol}</span>}
      {title && <h1>{title}</h1>}
      {children}
      {description && <p className="card-description">{description}</p>}
      {renderSectionContent()}
    </div>
  );
};

export default Card;
