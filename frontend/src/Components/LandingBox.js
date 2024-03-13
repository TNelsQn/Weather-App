import React, { useEffect } from 'react';
import '../css/weather.css'; // CSS file for styling

function LandingBox({ children }) {

  useEffect(() => {
    const handleResize = () => {
      const wrapper = document.querySelector('.top-center-wrapper');
      if (wrapper) {
        const windowHeight = window.innerHeight;
        const wrapperHeight = wrapper.offsetHeight;
        wrapper.style.top = `${windowHeight / 8 - wrapperHeight / 2}px`;
      }
    };

    // Call the resize function initially and add a listener for resize events
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="top-center-wrapper">
      {children}
    </div>
  );
}

export default LandingBox;
