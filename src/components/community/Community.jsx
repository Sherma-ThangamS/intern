import React, { useEffect } from 'react';
import './community.scss';
import Footer from '../footer/Footer';

const Community = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || 0.5); // Handle missing data-speed attribute gracefully
        const translateY = -scrollValue * 0.17;
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="community">
      <div className="community-content">
        <h2>Join the Skater Republic Community</h2>
        <p>
          Connect with fellow skaters, share your experiences, and stay updated on
          the latest news and events in our vibrant community.
        </p>
        <div className="community-cards">
          <div className="community-card parallax" data-speed="0.5">
            <h3>Community Forum</h3>
            <p>
              Discuss tricks, tips, and the latest updates with skaters from
              around the world on our community forum.
            </p>
            <button className="community-button">Join Forum</button>
          </div>
          <div className="community-card parallax" data-speed="0.5">
            <h3>Discord Channel</h3>
            <p>
              Chat in real-time with skaters, join voice channels, and participate
              in community events on our Discord channel.
            </p>
            <button className="community-button">Visit Discord</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Community;
