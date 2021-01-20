import { useState, useEffect } from 'react';
// :::::: HELPERS :::::::
// Helper Functions to be called.

// ---> Inner Height <---
const GetInnerHeight = () => {
  const [IHeight, setIHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setIHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return IHeight;
};
export default GetInnerHeight;

// ---> Inner Height <---
// ---> Inner Height <---
// ---> Inner Height <---
// ---> Inner Height <---
