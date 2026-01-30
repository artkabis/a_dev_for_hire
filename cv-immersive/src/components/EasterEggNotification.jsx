import React, { useState, useEffect, useCallback } from 'react';

/**
 * Easter Egg Notification Component
 * Displays animated notifications when easter eggs are triggered
 */
const EasterEggNotification = ({ notification, onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsVisible(true);
      setIsExiting(false);

      // Auto-hide after delay
      const hideTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 500);
      }, 4000);

      return () => clearTimeout(hideTimer);
    }
  }, [notification, onComplete]);

  if (!isVisible || !notification) return null;

  const getEffectStyles = () => {
    switch (notification.effect) {
      case 'matrix':
        return {
          background: 'linear-gradient(135deg, #000 0%, #003300 100%)',
          borderColor: '#00ff00',
          color: '#00ff00',
          textShadow: '0 0 10px #00ff00'
        };
      case 'confetti':
        return {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #6bcb77 100%)',
          borderColor: '#ffd93d',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        };
      case 'admin':
        return {
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderColor: '#e94560',
          color: '#e94560',
          textShadow: '0 0 10px #e94560'
        };
      case 'energize':
        return {
          background: 'linear-gradient(135deg, #3d2c29 0%, #2c1810 100%)',
          borderColor: '#c4a35a',
          color: '#c4a35a',
          textShadow: '0 0 10px #c4a35a'
        };
      case 'neon':
        return {
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          borderColor: '#ff00ff',
          color: '#ff00ff',
          textShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff'
        };
      case 'glitch':
        return {
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
          borderColor: '#ff0000',
          color: '#ff0000',
          textShadow: '2px 0 #00ffff, -2px 0 #ff00ff',
          animation: 'glitch 0.3s infinite'
        };
      case 'wave':
        return {
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          borderColor: '#00ffc8',
          color: '#00ffc8',
          textShadow: '0 0 10px #00ffc8'
        };
      case 'fireworks':
        return {
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
          borderColor: '#ffd700',
          color: '#ffd700',
          textShadow: '0 0 20px #ffd700, 0 0 40px #ff6b00'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)',
          borderColor: '#00ffc8',
          color: '#00ffc8',
          textShadow: '0 0 10px #00ffc8'
        };
    }
  };

  const effectStyles = getEffectStyles();

  const containerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${isExiting ? 0.8 : 1})`,
    zIndex: 10000,
    padding: '30px 50px',
    borderRadius: '15px',
    border: `3px solid ${effectStyles.borderColor}`,
    boxShadow: `0 0 30px ${effectStyles.borderColor}40, 0 20px 60px rgba(0,0,0,0.5)`,
    textAlign: 'center',
    fontFamily: "'Orbitron', 'Courier New', monospace",
    opacity: isExiting ? 0 : 1,
    transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    ...effectStyles
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '15px',
    display: 'block',
    animation: 'pulse 1s infinite'
  };

  const titleStyle = {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    marginBottom: '10px',
    opacity: 0.7
  };

  const messageStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    lineHeight: 1.4
  };

  const getIcon = () => {
    switch (notification.effect) {
      case 'matrix': return '01';
      case 'confetti': return '**';
      case 'admin': return '#>';
      case 'energize': return 'C>';
      case 'neon': return '><';
      case 'glitch': return '!!';
      case 'wave': return '~~';
      case 'fireworks': return '**';
      default: return '?!';
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
      <div style={containerStyle}>
        <span style={iconStyle}>{getIcon()}</span>
        <div style={titleStyle}>[ EASTER EGG UNLOCKED ]</div>
        <div style={messageStyle}>{notification.message}</div>
      </div>
    </>
  );
};

export default EasterEggNotification;
