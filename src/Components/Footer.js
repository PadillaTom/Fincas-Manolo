import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
// Data:
import { links } from '../Utils/constants';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <article className='footer-center'>
        <div className='footer-light'>
          <div className='footer-section'>
            <h2>Mapa del sitio</h2>
            <hr />
            {/* Links */}
            <ul className='footer-links'>
              {links.map((link) => {
                const { id, name, url } = link;
                return (
                  <li key={id}>
                    <Link to={`${url}`}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer-section'>
            <h2>Contacto</h2>
            <hr />
            <div className='footer-contact-item'>
              <p>Fincas-Manolo@email.com</p>
            </div>
            <div className='footer-contact-item'>
              <p>+41 79 400 26 93</p>
            </div>
          </div>
          <div className='footer-section'>
            <h2>Redes Sociales</h2>
            <hr />
            <div className='footer-social-icons'>
              <AiOutlineFacebook></AiOutlineFacebook>
              <AiOutlineInstagram></AiOutlineInstagram>
              <AiOutlineTwitter></AiOutlineTwitter>
            </div>
          </div>
        </div>
      </article>
      <div className='footer-dark'>
        <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
