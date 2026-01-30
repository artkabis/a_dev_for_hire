/**
 * Easter Egg Manager
 * Handles all secret interactions and easter eggs in the CV Immersive experience
 */

import { easterEggs } from '../data/cvDataLoader.js';

class EasterEggManager {
  constructor() {
    this.konamiProgress = 0;
    this.typedBuffer = '';
    this.logoClicks = 0;
    this.lastLogoClick = 0;
    this.mousePositions = [];
    this.lastMouseTime = 0;
    this.idleTimer = null;
    this.discoveredEggs = new Set();
    this.callbacks = {};
    this.isActive = true;

    this.init();
  }

  init() {
    // Keyboard listener for Konami code and typed triggers
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Mouse movement for shake detection
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

    // Reset idle timer on any interaction
    ['mousemove', 'keydown', 'click', 'scroll'].forEach(event => {
      document.addEventListener(event, () => this.resetIdleTimer());
    });

    // Start idle timer
    this.resetIdleTimer();

    // Load discovered eggs from localStorage
    this.loadDiscovered();

    console.log('[EasterEgg] Manager initialized');
  }

  // Register callback for easter egg effects
  onEasterEgg(callback) {
    this.callbacks.onTrigger = callback;
  }

  // Handle keyboard input
  handleKeyDown(e) {
    if (!this.isActive) return;

    // Check Konami code
    const konamiCode = easterEggs.konami.code;
    if (e.code === konamiCode[this.konamiProgress]) {
      this.konamiProgress++;
      if (this.konamiProgress === konamiCode.length) {
        this.triggerEasterEgg('konami');
        this.konamiProgress = 0;
      }
    } else {
      this.konamiProgress = 0;
    }

    // Check typed triggers (only printable characters)
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      this.typedBuffer += e.key.toLowerCase();

      // Keep buffer at reasonable length
      if (this.typedBuffer.length > 20) {
        this.typedBuffer = this.typedBuffer.slice(-20);
      }

      // Check for trigger words
      ['hire', 'sudo', 'coffee'].forEach(trigger => {
        if (this.typedBuffer.includes(trigger)) {
          this.triggerEasterEgg(trigger);
          this.typedBuffer = '';
        }
      });
    }
  }

  // Handle mouse movement for shake detection
  handleMouseMove(e) {
    if (!this.isActive) return;

    const now = Date.now();
    this.mousePositions.push({ x: e.clientX, y: e.clientY, time: now });

    // Keep only last 500ms of positions
    this.mousePositions = this.mousePositions.filter(p => now - p.time < 500);

    // Check for shake (rapid direction changes)
    if (this.mousePositions.length > 10) {
      let directionChanges = 0;
      let totalDistance = 0;

      for (let i = 1; i < this.mousePositions.length; i++) {
        const dx = this.mousePositions[i].x - this.mousePositions[i-1].x;
        const dy = this.mousePositions[i].y - this.mousePositions[i-1].y;
        totalDistance += Math.sqrt(dx*dx + dy*dy);

        if (i > 1) {
          const prevDx = this.mousePositions[i-1].x - this.mousePositions[i-2].x;
          const prevDy = this.mousePositions[i-1].y - this.mousePositions[i-2].y;

          // Direction change detection
          if ((dx * prevDx < 0) || (dy * prevDy < 0)) {
            directionChanges++;
          }
        }
      }

      // Trigger shake if enough rapid movement
      if (directionChanges > 8 && totalDistance > easterEggs.shake.threshold) {
        this.triggerEasterEgg('shake');
        this.mousePositions = [];
      }
    }
  }

  // Handle logo clicks
  handleLogoClick() {
    if (!this.isActive) return;

    const now = Date.now();

    // Reset if too much time between clicks
    if (now - this.lastLogoClick > 2000) {
      this.logoClicks = 0;
    }

    this.logoClicks++;
    this.lastLogoClick = now;

    if (this.logoClicks >= easterEggs.logoClick.clicks) {
      this.triggerEasterEgg('logoClick');
      this.logoClicks = 0;
    }

    return this.logoClicks;
  }

  // Reset idle timer
  resetIdleTimer() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }

    this.idleTimer = setTimeout(() => {
      if (this.isActive) {
        this.triggerEasterEgg('idle');
      }
    }, easterEggs.idle.timeout);
  }

  // Check if all achievements were found
  checkAllAchievements(foundAchievements) {
    if (foundAchievements && foundAchievements.length >= 10) {
      if (!this.discoveredEggs.has('allAchievements')) {
        this.triggerEasterEgg('allAchievements');
      }
    }
  }

  // Trigger an easter egg
  triggerEasterEgg(eggId) {
    const egg = easterEggs[eggId];
    if (!egg) return;

    // Mark as discovered
    this.discoveredEggs.add(eggId);
    this.saveDiscovered();

    console.log(`[EasterEgg] Triggered: ${eggId}`);

    // Call registered callback
    if (this.callbacks.onTrigger) {
      this.callbacks.onTrigger({
        id: eggId,
        effect: egg.effect,
        message: egg.message
      });
    }

    return egg;
  }

  // Get discovered eggs
  getDiscovered() {
    return Array.from(this.discoveredEggs);
  }

  // Check if specific egg was discovered
  wasDiscovered(eggId) {
    return this.discoveredEggs.has(eggId);
  }

  // Get discovery percentage
  getDiscoveryProgress() {
    const total = Object.keys(easterEggs).length;
    return Math.round((this.discoveredEggs.size / total) * 100);
  }

  // Save discovered eggs to localStorage
  saveDiscovered() {
    try {
      localStorage.setItem('cv_easter_eggs', JSON.stringify(Array.from(this.discoveredEggs)));
    } catch (e) {
      console.warn('[EasterEgg] Could not save to localStorage');
    }
  }

  // Load discovered eggs from localStorage
  loadDiscovered() {
    try {
      const saved = localStorage.getItem('cv_easter_eggs');
      if (saved) {
        const eggs = JSON.parse(saved);
        eggs.forEach(egg => this.discoveredEggs.add(egg));
      }
    } catch (e) {
      console.warn('[EasterEgg] Could not load from localStorage');
    }
  }

  // Reset all discovered eggs
  reset() {
    this.discoveredEggs.clear();
    this.saveDiscovered();
  }

  // Pause/resume
  pause() {
    this.isActive = false;
  }

  resume() {
    this.isActive = true;
  }

  // Cleanup
  destroy() {
    this.isActive = false;
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }
  }
}

// Singleton instance
let instance = null;

export const getEasterEggManager = () => {
  if (!instance) {
    instance = new EasterEggManager();
  }
  return instance;
};

export default EasterEggManager;
