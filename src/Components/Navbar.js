import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
// Data:
import FMLogoPNG from '../Assets/FMLogoPNG.png';
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
                <AiOutlineBars onClick={openSidebar}></AiOutlineBars>
              )}
            </button>

            <Link to='/'>
              <img src={FMLogoPNG} alt='Inicio' />
            </Link>
          </div>
          {/* DESKTOP LINKS */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
