import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
// Data:
import FMLogoPNG from '../Assets/FMLogoPNG.png';
import FMHoriz from '../Assets/FMHoriz.png';
// Context:
import { useProductsContext } from '../Context/products_context';

const Navbar = () => {
  const { openSidebar, closeSidebar, isSidebarOpen } = useProductsContext();

  return (
    <>
      {/* MOBILE */}
      <nav className='navContainer'>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='nav-toggle' type='button'>
              {isSidebarOpen ? (
                <AiOutlineClose onClick={closeSidebar}></AiOutlineClose>
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
