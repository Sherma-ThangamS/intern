// Hero.jsx
import React, { useEffect } from 'react';
import './hero.scss';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      const heroVideo = document.querySelector('.hero-video');
  
      if (heroContent) {
        const translateY = scrollValue * 0.4; // Adjust the multiplier for desired parallax effect
        heroContent.style.transform = `translateY(${translateY}px)`;
      }
      if (heroVideo) {
        // Adjust the multiplier and offset for desired parallax effect
        const scaleValue = 1 - scrollValue * 0.001;
        const opacityValue = 1 - scrollValue * 0.002;
  
        // Apply transform and opacity to create the parallax effect
        heroVideo.style.transform = `scale(${scaleValue})`;
        heroVideo.style.opacity = opacityValue;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="../../CoverVideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to Skater Republic</h1>
        <p>Immerse yourself in an epic underwater adventure.</p>
        <a href="#purchase" className="cta-button">
          Purchase Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
