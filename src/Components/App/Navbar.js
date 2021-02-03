import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TweenMax, Expo } from 'gsap';

// Data:
import FMHoriz from '../../Assets/FMHoriz.png';
import { links } from '../../Utils/constants';

// Context:
import { useProductsContext } from '../../Context/products_context';

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

            <Link to='/' className='nav-logo'>
              <img src={FMHoriz} alt='Inicio' />
            </Link>

            <div className='desktop-links'>
              {links.map((link) => {
                const { id, name, url } = link;
                return (
                  <Link to={url} key={id} className='desktop-link'>
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* DESKTOP LINKS */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
