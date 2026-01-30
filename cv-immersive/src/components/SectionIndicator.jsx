import React from 'react';

const SectionIndicator = ({ currentSection = 0, totalSections = 8, onSectionClick = null }) => {
  // CV Section names for the immersive CV experience
  const sectionNames = [
    'Boot',
    'Identité',
    'Compétences',
    'Parcours',
    'Projets',
    'Trophées',
    'Lab',
    'Contact'
  ];

  const handleDotClick = (index) => {
    if (onSectionClick) {
      onSectionClick(index);
    } else {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = index * (scrollHeight / (totalSections - 1));
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="section-indicator" id="sectionIndicator">
      {Array.from({ length: totalSections }).map((_, i) => (
        <div
          key={i}
          className={`indicator-dot ${i === currentSection ? 'active' : ''}`}
          data-section={i}
          data-name={sectionNames[i]}
          onClick={() => handleDotClick(i)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleDotClick(i);
            }
          }}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
