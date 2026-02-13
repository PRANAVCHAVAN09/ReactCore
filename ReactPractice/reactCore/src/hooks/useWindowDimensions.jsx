import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      debugger
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

  

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      debugger
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once

  return windowSize; // Return the dimensions
};

export default useWindowDimensions;
