import './App.css';
import Navbar from './components/navabar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Purchase from './components/purchase/Purchase';
import Community from './components/community/Community';
import React, { useState, useEffect, useRef} from 'react';
import { animateCircles } from "./hooks/useCircleAnimation";
import { useMousePosition } from "./hooks/useMousePosition";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const position = useMousePosition

  const handleTouchMove = (e) => {
    setCoords({ x: e.nativeEvent.touches[0].clientX, y: e.nativeEvent.touches[0].clientY });
  };

  useEffect(() => {
    const circles = circlesRef.current;
    position(circles,setCoords)
  }, []); 
 
  useEffect(() => {
    animateCircles(circlesRef, coords);
  }, [coords]);

  return (
    <Router>
    <div className="App" onTouchMove={handleTouchMove}>
      {Array.from({ length: 18 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle"
        ></div>
      ))}
      <Navbar/>
      <Hero/>
      <About/>
      <Purchase/>
      <Community/>
      
    </div>
    </Router>
  );
}

export default App;
