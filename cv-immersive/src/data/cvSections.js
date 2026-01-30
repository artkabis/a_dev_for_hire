// CV Immersive - Section Data
// Replaces universes.js for the CV experience

export const cvSectionData = [
  {
    id: 'boot',
    name: 'INITIALIZING',
    color: '#00ff00',
    symbol: '>_',
    title: 'System Boot',
    description: 'Loading developer profile... Initializing skill matrix... Connecting to career database...',
    type: 'intro',
    duration: 4000,
    skipable: true
  },
  {
    id: 'identity',
    name: 'IDENTITY CORE',
    color: '#00ffc8',
    symbol: '@',
    title: 'Gregory Nicolle',
    description: 'Full-Stack Engineer & Tech Lead | 10+ years of experience | 84+ repositories | Arctic Code Vault Contributor',
    type: 'profile',
    data: {
      name: 'Gregory Nicolle',
      alias: 'artkabis',
      title: 'Full-Stack Engineer & Tech Lead',
      location: 'France',
      experience: '10+ years',
      repositories: 84,
      status: 'Available for hire',
      badges: ['Arctic Code Vault', 'Pull Shark x2', 'Quickdraw']
    }
  },
  {
    id: 'skills',
    name: 'SKILL MATRIX',
    color: '#8a2be2',
    symbol: '{}',
    title: 'Technical Arsenal',
    description: 'A constellation of technologies mastered over a decade of passionate coding.',
    type: 'skills',
    data: {
      categories: [
        {
          name: 'Frontend',
          color: '#00ffc8',
          skills: [
            { name: 'JavaScript', level: 95, years: 10 },
            { name: 'TypeScript', level: 90, years: 5 },
            { name: 'React.js', level: 95, years: 6 },
            { name: 'Vue.js', level: 80, years: 4 },
            { name: 'Angular', level: 75, years: 3 },
            { name: 'Three.js', level: 85, years: 4 },
            { name: 'HTML/CSS', level: 95, years: 10 },
            { name: 'Tailwind', level: 90, years: 3 }
          ]
        },
        {
          name: 'Backend',
          color: '#8a2be2',
          skills: [
            { name: 'Node.js', level: 90, years: 7 },
            { name: 'Express', level: 90, years: 6 },
            { name: 'Python', level: 75, years: 4 },
            { name: 'GraphQL', level: 80, years: 3 },
            { name: 'REST APIs', level: 95, years: 8 }
          ]
        },
        {
          name: 'Database',
          color: '#ffd700',
          skills: [
            { name: 'MongoDB', level: 85, years: 5 },
            { name: 'PostgreSQL', level: 80, years: 4 },
            { name: 'Redis', level: 75, years: 3 },
            { name: 'Firebase', level: 85, years: 4 }
          ]
        },
        {
          name: 'DevOps',
          color: '#ff0080',
          skills: [
            { name: 'Docker', level: 80, years: 4 },
            { name: 'Git', level: 95, years: 10 },
            { name: 'CI/CD', level: 85, years: 5 },
            { name: 'AWS', level: 70, years: 3 }
          ]
        },
        {
          name: 'Security',
          color: '#ff0000',
          skills: [
            { name: 'OWASP', level: 90, years: 6 },
            { name: 'Cryptography', level: 85, years: 4 },
            { name: 'JWT/OAuth', level: 90, years: 5 },
            { name: 'PQC', level: 70, years: 2 }
          ]
        }
      ]
    }
  },
  {
    id: 'experience',
    name: 'TIME WARP',
    color: '#ff00ff',
    symbol: '>>',
    title: 'Career Journey',
    description: 'A timeline of professional evolution through various dimensions of software development.',
    type: 'experience',
    data: {
      periods: [
        {
          years: '2024-2026',
          title: 'Innovation Era',
          projects: [
            { name: 'rssgenerator', desc: 'Full-stack RSS platform with OWASP security', tech: ['Node.js', 'React', 'OWASP'] },
            { name: 'vocalEncryptPQ', desc: 'POST-QUANTUM voice encryption', tech: ['JavaScript', 'Web Audio', 'Kyber'] },
            { name: 'sentiment-model', desc: 'NLP sentiment analysis', tech: ['TensorFlow.js', 'NLP'] },
            { name: 'signalAndroid', desc: 'Kotlin Android app', tech: ['Kotlin', 'Material Design 3'] },
            { name: 'immersive_exp', desc: 'WebGL/Three.js experience', tech: ['Three.js', 'WebGL', 'GSAP'] }
          ]
        },
        {
          years: '2022-2024',
          title: 'Enterprise Phase',
          projects: [
            { name: 'DeepLinkAudit', desc: 'Enterprise SEO crawler', tech: ['Node.js', 'Puppeteer'] },
            { name: 'privatechat', desc: 'E2E encrypted messaging', tech: ['WebSocket', 'AES-256', 'ECDH'] },
            { name: 'custom-netflix', desc: 'Netflix clone', tech: ['React', 'TMDB API'] },
            { name: 'Social-network', desc: 'MERN stack platform', tech: ['MongoDB', 'Express', 'React', 'Node'] },
            { name: 'myShopBooking', desc: 'E-commerce with Stripe', tech: ['Stripe', 'Node.js', 'React'] }
          ]
        },
        {
          years: '2020-2022',
          title: 'Growth Stage',
          projects: [
            { name: 'perfectlinks-v2', desc: 'URL shortener & analytics', tech: ['Node.js', 'MongoDB'] },
            { name: 'jwt-auth', desc: 'JWT authentication system', tech: ['JWT', 'Node.js'] },
            { name: 'guitarTuner', desc: 'Web Audio pitch detection', tech: ['Web Audio API', 'FFT'] },
            { name: 'ImageWhisper', desc: 'AI image analysis', tech: ['OpenAI Vision', 'React'] }
          ]
        },
        {
          years: '2018-2020',
          title: 'Foundation',
          projects: [
            { name: 'toolsWP', desc: 'WordPress toolkit', tech: ['PHP', 'WordPress'] },
            { name: 'spaceInvaders', desc: 'Canvas game', tech: ['Canvas', 'JavaScript'] },
            { name: 'rubixcube', desc: '3D puzzle', tech: ['Three.js', 'Quaternions'] },
            { name: 'keyPairGenerator', desc: 'Crypto key generator', tech: ['Web Crypto API'] }
          ]
        }
      ]
    }
  },
  {
    id: 'projects',
    name: 'PROJECT GALLERY',
    color: '#00c8ff',
    symbol: '</>',
    title: 'Featured Creations',
    description: 'Explore interactive showcases of key projects that demonstrate technical excellence.',
    type: 'projects',
    data: {
      featured: [
        {
          name: 'Odyssee Cosmique',
          description: 'Immersive 3D web experience with 11 cosmic universes',
          image: 'odyssee.png',
          tech: ['Three.js', 'React', 'WebGL', 'GSAP', 'Rapier Physics'],
          github: 'https://github.com/artkabis/immersive_experience',
          demo: 'https://artkabis.github.io/immersive_experience/',
          highlight: true
        },
        {
          name: 'PrivateChat',
          description: 'End-to-end encrypted messaging platform',
          image: 'privatechat.png',
          tech: ['Node.js', 'WebSocket', 'AES-256', 'ECDH'],
          github: 'https://github.com/artkabis/privatechat',
          highlight: true
        },
        {
          name: 'VocalEncrypt PQ',
          description: 'Post-quantum voice encryption',
          image: 'vocalencrypt.png',
          tech: ['JavaScript', 'Web Audio', 'Kyber-768', 'Dilithium'],
          github: 'https://github.com/artkabis/vocalEncryptPostQuantic',
          highlight: true
        },
        {
          name: 'DeepLinkAudit',
          description: 'Enterprise SEO crawler and analyzer',
          image: 'deeplinkaudit.png',
          tech: ['Node.js', 'Puppeteer', 'React'],
          github: 'https://github.com/artkabis/DeepLinkAudit'
        },
        {
          name: 'Sentiment Analyzer',
          description: 'NLP model for sentiment analysis',
          image: 'sentiment.png',
          tech: ['TensorFlow.js', 'TypeScript', 'NLP'],
          github: 'https://github.com/artkabis/sentiment-analyser-model'
        },
        {
          name: 'Rubix Cube 3D',
          description: 'Interactive 3D Rubiks cube in browser',
          image: 'rubixcube.png',
          tech: ['Three.js', 'Quaternions'],
          github: 'https://github.com/artkabis/rubixcube',
          demo: 'https://artkabis.github.io/rubixcube/'
        }
      ]
    }
  },
  {
    id: 'achievements',
    name: 'TROPHY VAULT',
    color: '#ffd700',
    symbol: '*',
    title: 'Achievements Unlocked',
    description: 'A collection of milestones and recognitions earned throughout the developer journey.',
    type: 'achievements',
    data: {
      trophies: [
        { name: 'Arctic Code Vault', icon: 'vault', desc: 'Code preserved for 1000 years', rarity: 'legendary' },
        { name: 'Pull Shark x2', icon: 'shark', desc: 'Prolific PR contributor', rarity: 'epic' },
        { name: 'Quickdraw', icon: 'bolt', desc: 'Fast first responder', rarity: 'rare' },
        { name: 'Repository Hoarder', icon: 'repos', desc: '84+ public repositories', rarity: 'epic' },
        { name: 'Crypto Master', icon: 'lock', desc: 'Post-quantum cryptography', rarity: 'legendary' },
        { name: 'Pixel Perfect', icon: 'art', desc: 'UI/UX excellence', rarity: 'rare' },
        { name: 'OWASP Guardian', icon: 'shield', desc: 'Security expert', rarity: 'epic' },
        { name: 'Game Dev', icon: 'gamepad', desc: 'Game development skills', rarity: 'rare' },
        { name: 'AI Whisperer', icon: 'brain', desc: 'ML/AI implementation', rarity: 'epic' },
        { name: 'Coffee Overflow', icon: 'coffee', desc: '10+ years coding', rarity: 'legendary' }
      ]
    }
  },
  {
    id: 'lab',
    name: 'CODE LAB',
    color: '#ff0080',
    symbol: '~/.',
    title: 'Interactive Playground',
    description: 'Explore interactive demos and discover hidden Easter eggs. Try typing special commands...',
    type: 'lab',
    data: {
      demos: [
        { name: 'Physics Sandbox', desc: 'Click to spawn physics objects' },
        { name: 'Shader Gallery', desc: 'Custom WebGL shaders' },
        { name: 'Audio Visualizer', desc: 'Real-time frequency analysis' }
      ],
      hints: [
        'Try the Konami Code...',
        'Type "hire" for a surprise',
        'Shake your mouse quickly',
        'Click the logo 10 times',
        'Find all achievements'
      ]
    }
  },
  {
    id: 'contact',
    name: 'CONTACT NEXUS',
    color: '#00ff7f',
    symbol: '@>',
    title: 'Establish Connection',
    description: 'Ready to collaborate? Let\'s build something amazing together.',
    type: 'contact',
    data: {
      status: 'AVAILABLE FOR HIRE',
      links: [
        { name: 'GitHub', url: 'https://github.com/artkabis', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/artkabis', icon: 'linkedin' },
        { name: 'Portfolio', url: 'https://perfectlinks.artkabis.fr', icon: 'globe' },
        { name: 'CodePen', url: 'https://codepen.io/artkabis', icon: 'codepen' },
        { name: 'Dev.to', url: 'https://dev.to/artkabis', icon: 'dev' }
      ],
      workModes: ['Remote', 'Hybrid', 'On-site (France)'],
      contractTypes: ['CDI', 'Freelance', 'Contract'],
      roles: ['Tech Lead', 'Senior Developer', 'Project Manager']
    }
  }
];

export const getSectionById = (id) => {
  return cvSectionData.find(s => s.id === id);
};

export const getSectionByIndex = (index) => {
  return cvSectionData[index] || cvSectionData[0];
};

export const getTotalSections = () => cvSectionData.length;

// Easter Eggs configuration
export const easterEggs = {
  konami: {
    code: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
    effect: 'matrix',
    message: 'You found the secret! Welcome to the Matrix.'
  },
  hire: {
    trigger: 'hire',
    effect: 'confetti',
    message: "That's the spirit! Let's talk!"
  },
  sudo: {
    trigger: 'sudo',
    effect: 'admin',
    message: 'Access granted. Welcome, root.'
  },
  coffee: {
    trigger: 'coffee',
    effect: 'energize',
    message: 'Coffee.exe loaded. Energy +100%'
  },
  logoClick: {
    clicks: 10,
    effect: 'neon',
    message: 'Entering the Grid...'
  },
  shake: {
    threshold: 500,
    effect: 'glitch',
    message: 'Whoa, easy there!'
  },
  idle: {
    timeout: 30000,
    effect: 'wave',
    message: 'Still exploring? Take your time!'
  },
  allAchievements: {
    effect: 'fireworks',
    message: 'Completionist - 100% Discovered!'
  }
};
