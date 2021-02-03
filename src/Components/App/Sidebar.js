import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

// Data:
import { links } from '../../Utils/constants';
import { useProductsContext } from '../../Context/products_context';
import { GetInnerHeight } from '../../Utils/helpers';

const Sidebar = () => {
  // Hook Context:
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const myHeight = GetInnerHeight();
  return (
    <aside
      // style={{ height: `${myHeight}px` }}
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
        <hr />
      </ul>

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
        <hr />
      </div>

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
