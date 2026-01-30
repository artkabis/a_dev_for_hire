/**
 * CV Data Loader
 * Loads CV data from external JSON file for easy maintenance
 *
 * To update your CV:
 * 1. Edit cv-data.json directly
 * 2. No need to modify any JavaScript files
 * 3. Changes will be reflected on next build/refresh
 */

import cvData from './cv-data.json';

// Export individual sections for convenience
export const profile = cvData.profile;
export const skills = cvData.skills;
export const experience = cvData.experience;
export const projects = cvData.projects;
export const achievements = cvData.achievements;
export const contact = cvData.contact;
export const sections = cvData.sections;
export const easterEggs = cvData.easterEggs;
export const meta = cvData.meta;

// Export the full data object
export default cvData;

// Helper functions
export const getSectionById = (id) => {
  return sections.find(s => s.id === id);
};

export const getSectionByIndex = (index) => {
  return sections[index] || sections[0];
};

export const getTotalSections = () => sections.length;

export const getSkillsByCategory = (categoryName) => {
  const category = skills.categories.find(c => c.name === categoryName);
  return category ? category.skills : [];
};

export const getAllSkills = () => {
  return skills.categories.flatMap(c => c.skills.map(s => ({ ...s, category: c.name, color: c.color })));
};

export const getFeaturedProjects = () => {
  return projects.featured.filter(p => p.highlight);
};

export const getProjectsByTech = (techName) => {
  return projects.featured.filter(p => p.tech.includes(techName));
};

export const getExperienceByYear = (year) => {
  return experience.periods.find(p => p.years.includes(year.toString()));
};

export const getAchievementsByRarity = (rarity) => {
  return achievements.trophies.filter(t => t.rarity === rarity);
};

export const getContactLinks = () => {
  return contact.links;
};

// Easter egg helpers
export const getEasterEgg = (id) => {
  return easterEggs[id];
};

export const getEasterEggTriggers = () => {
  return Object.keys(easterEggs);
};

// Validation helper (useful for debugging)
export const validateCVData = () => {
  const errors = [];

  if (!profile.name) errors.push('Missing profile name');
  if (!skills.categories.length) errors.push('No skill categories');
  if (!experience.periods.length) errors.push('No experience periods');
  if (!projects.featured.length) errors.push('No featured projects');
  if (!sections.length) errors.push('No sections defined');

  return {
    valid: errors.length === 0,
    errors
  };
};

// Log CV data version on load (development only)
if (import.meta.env?.DEV) {
  console.log(`[CV Data] Loaded v${meta.version} (${meta.lastUpdated})`);
  const validation = validateCVData();
  if (!validation.valid) {
    console.warn('[CV Data] Validation errors:', validation.errors);
  }
}
