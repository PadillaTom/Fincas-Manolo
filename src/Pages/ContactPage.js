import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactPage = () => {
  const contactImg =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/OliveServices3.jpg?alt=media&token=d79f9bae-c2e1-491b-8511-241e390bc91c';
  return (
    <section className='section contactSect'>
      <div className='section-center'>
        <h2 className='page-title'>Contacto</h2>
      </div>
      {/* Banner */}
      <article className='contact-banner'>
        <img src={contactImg} alt='Contactenos' />
        <div className='banner-info'>
          <p>fincas-manolo@email.com</p>
          <p>+41 79 400 26 93</p>
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
            <textarea placeholder='Ingrese su consulta' rows='5'></textarea>
          </div>
          <button type='button' className='form-cta'>
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
};

export default ContactPage;
