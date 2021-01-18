import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
// Data:

const Navbar = () => {
  return (
    <>
      {/* MOBILE */}
      <nav className='navbar'>
        <div className='mobile-nav'>
          <div className='nav-ham'>
            <AiOutlineBars></AiOutlineBars>
          </div>
          <div className='nav-logo'>Fincas Manolo</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
