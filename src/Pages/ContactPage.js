import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactPage = () => {
  return (
    <section className='section'>
      <div className='section-center'>
        <h2 className='page-title'>Contacto</h2>
        {/* Banner */}
        <article className='contact-banner'>
          <h2>IMAGEN FONDO RELATIVE</h2>
          <div className='banner-info'>
            <div className='singleBanner-info'>
              <AiOutlineMail></AiOutlineMail>
              <p>fincas-manolo@email.com</p>
            </div>
            <div className='singleBanner-info'>
              <AiOutlinePhone></AiOutlinePhone>
              <p>+41 79 400 26 93</p>
            </div>
          </div>
        </article>
        {/* Formulario */}
        <article className='formContainer'>
          <form className='contact-form'>
            <div className='singleInput'>
              <label htmlFor='nombre'>Nombre</label>
              <input type='text' placeholder='Ingrese su nombre' id='nombre' />
            </div>
            <div className='singleInput'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' placeholder='Ingrese su correo' id='email' />
            </div>
            <div className='singleInput'>
              <label htmlFor='telefono'>Teléfono</label>
              <input
                type='text'
                id='Telefono'
                placeholder='Ingrese su Teléfono'
              />
            </div>
            <div className='singleInput'>
              <label htmlFor=''>Consulta</label>
              <textarea placeholder='Ingrese su consulta'></textarea>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default ContactPage;
