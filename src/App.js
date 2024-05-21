import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  
  return (
    <div className="App-header">
      <AnimatedCursor
      innerSize={4}
      outerSize={28}
      color='255, 37, 0' // this thing accepts rgb values
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
       />
      <Home />
    </div>
  );
}

export default App;
