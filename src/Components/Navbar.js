import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { TweenMax, Expo } from 'gsap';
// Data:
import FMHoriz from '../Assets/FMHoriz.png';
// Context:
import { useProductsContext } from '../Context/products_context';

const Navbar = () => {
  const { openSidebar, closeSidebar, isSidebarOpen } = useProductsContext();
  // GSAP:
  useEffect(() => {
    TweenMax.from('.navContainer', 1.5, {
      delay: 0.6,
      top: '-100%',
      ease: Expo.easeOut,
    });
  }, []);

  return (
    <>
      {/* MOBILE */}
      <nav className='navContainer'>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='nav-toggle' type='button'>
              {isSidebarOpen ? (
                <FaTimes
                  onClick={closeSidebar}
                  style={{ fontSize: '1.5rem' }}
                ></FaTimes>
              ) : (
                <FaBars onClick={openSidebar}></FaBars>
              )}
            </button>
            <div className='nav-logo'>
              <Link to='/'>
                <img src={FMHoriz} alt='Inicio' />
              </Link>
            </div>
            <div className='nav-search'>
              <AiOutlineSearch></AiOutlineSearch>
            </div>
          </div>
          {/* DESKTOP LINKS */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
