import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
// Data:
import { links } from '../Utils/constants';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <article className='section-center'>
        <div className='footer-light'>
          <div className='footer-site-map'>
            <h2>Mapa del sitio</h2>
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
          <div className='footer-contact'>
            <div className='footer-contact-item'>
              <div className='footer-contact-icon'>
                <AiOutlineMail></AiOutlineMail>
              </div>
              <p>Fincas-Manolo@email.com</p>
            </div>
            <div className='footer-contact-item'>
              <div className='footer-contact-icon'>
                <AiOutlinePhone></AiOutlinePhone>
              </div>
              <p>+41 79 400 26 93</p>
            </div>
          </div>
          <div className='footer-social'>
            <AiOutlineFacebook></AiOutlineFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineTwitter></AiOutlineTwitter>
          </div>
        </div>
        <div className='footer-dark'>
          <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
