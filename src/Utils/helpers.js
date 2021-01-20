// :::::: HELPERS :::::::
// Helper Functions to be called.

import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// ---> Scroll To Top <---
const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return null;
};
export default withRouter(ScrollToTop);

// ---> Inner Height <---
export const GetInnerHeight = () => {
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

// ---> Inner Height <---
// ---> Inner Height <---
// ---> Inner Height <---
