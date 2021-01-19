import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
// Data:
import { links } from '../Utils/constants';
// Context:
import { useProductsContext } from '../Context/products_context';

const Sidebar = () => {
  // Window Inner Height:
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Hook Context:
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <aside
      style={{ height: `calc(${height} - 4rem)` }}
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      {/* Links */}
      <ul className='side-links'>
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <li key={id}>
              <Link to={`${url}`} onClick={closeSidebar}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* Contact Mail */}
      <div className='side-help'>
        <h2>¿Necesitas Ayuda?</h2>
        <div className='side-help-container'>
          <div className='side-help-item'>
            <div className='side-help-icon'>
              <AiOutlineMail></AiOutlineMail>
            </div>
            <p>Fincas-Manolo@email.com</p>
          </div>
          <div className='side-help-item'>
            <div className='side-help-icon'>
              <AiOutlinePhone></AiOutlinePhone>
            </div>
            <p>+41 79 400 26 93</p>
          </div>
        </div>
      </div>
      <hr />
      {/* Social */}
      <div className='side-social'>
        <h2>Síguenos en:</h2>
        <div className='side-social-container'>
          <AiOutlineFacebook></AiOutlineFacebook>
          <AiOutlineInstagram></AiOutlineInstagram>
          <AiOutlineTwitter></AiOutlineTwitter>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;