import React, { useEffect } from 'react';
import './about.scss';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const aboutContent = document.querySelector('.about-content');

      if (aboutContent) {
        // Adjust the multiplier for the desired parallax effect
        const translateY = scrollValue * 0.2;
        aboutContent.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="about" id='about'>
      <div className="about-content">
        <h2>Welcome to Skater Republic</h2>
        <div className="card-container">
          <div className="card">
            <img src="../../about.jpg" alt="Card Image 1" />
            <h3>Dynamic Skateboarding Adventure</h3>
            <p>
              Immerse yourself in a dynamic skateboarding adventure, exploring expansive skateparks,
              bustling cityscapes, and renowned real-life locations.
            </p>
          </div>
          <div className="card">
            <img src="../../aboutus.jpg" alt="Card Image 2" />
            <h3>Intuitive Controls and Tricks</h3>
            <p>
              Enjoy intuitive controls and a sophisticated trick system that allows you to perform
              thrilling and satisfying skateboarding maneuvers.
            </p>
          </div>
          <div className="card">
            <img src="../../company.jpg" alt="Card Image 3" />
            <h3>Compelling Progression Framework</h3>
            <p>
              Experience a compelling progression framework that makes every achievement feel truly gratifying
              as you advance through the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

