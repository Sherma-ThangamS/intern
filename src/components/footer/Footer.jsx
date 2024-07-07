// Footer.jsx

import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section games">
        <h3>GAMES</h3>
        <ul>
          <li>Fortnite</li>
          <li>Fall Guys</li>
          <li>Rocket League</li>
          <li>Unreal Tournament</li>
          <li>Infinity Blade</li>
          <li>Shadow Complex</li>
          <li>Robo Recall</li>
        </ul>
      </div>

      <div className="footer-section marketplaces">
        <h3>MARKETPLACES</h3>
        <ul>
          <li>Epic Games Store</li>
          <li>Fab</li>
          <li>Sketchfab</li>
          <li>Unreal Engine Marketplace</li>
          <li>ArtStation</li>
          <li>Store Refund Policy</li>
          <li>Store EULA</li>
        </ul>
      </div>

      <div className="footer-section tools">
        <h3>TOOLS</h3>
        <ul>
          <li>Unreal Engine</li>
          <li>UEFN</li>
          <li>MetaHuman</li>
          <li>Twinmotion</li>
          <li>Megascans</li>
          <li>RealityScan</li>
          <li>Rad Game Tools</li>
        </ul>
      </div>

      <div className="footer-section online-services">
        <h3>ONLINE SERVICES</h3>
        <ul>
          <li>Epic Online Services</li>
          <li>Kids Web Services</li>
          <li>Services Agreement</li>
          <li>Acceptable Use Policy</li>
          <li>Trust Statement</li>
          <li>Subprocessor List</li>
        </ul>
      </div>

      <div className="footer-section resources">
        <h3>RESOURCES</h3>
        <ul>
          <li>Dev Community</li>
          <li>MegaGrants</li>
          <li>Support-A-Creator</li>
          <li>Creator Agreement</li>
          <li>Distribute on Epic Games</li>
          <li>Unreal Engine Branding Guidelines</li>
          <li>Fan Art Policy</li>
          <li>Community Rules</li>
          <li>EU Digital Services Act Inquiries</li>
        </ul>
      </div>

      <div className="footer-section company">
        <h3>COMPANY</h3>
        <ul>
          <li>About</li>
          <li>Newsroom</li>
          <li>Careers</li>
          <li>Students</li>
          <li>UX Research</li>
        </ul>
      </div>

      <div className="footer-section legal">
        <p>© 2004-2024, Epic Games, Inc. All rights reserved. Unreal and its logo are Epic’s trademarks or registered trademarks in the US and elsewhere.</p>
        <ul>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Safety & security</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
