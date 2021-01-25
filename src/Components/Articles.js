import React, { useState, useEffect } from 'react';
import { articles } from '../Utils/constants';
import { Loading } from '../Components';

const Articles = () => {
  // Getting Data
  const [myArticles, setMyArticles] = useState([]);
  const art1img =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/diaguita.jpg?alt=media&token=9c2267d5-3d39-46e4-b6c7-678494cbc20b';
  useEffect(() => {
    setMyArticles(articles);
  }, []);

  // Loading:
  if (myArticles.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <section className='articlesContainer'>
      <div className='section-center'>
        <h2 className='section-title'>
          Artículos <span>Blog</span>
        </h2>
      </div>
      <div className='articlesCard-container'>
        {myArticles.map((article) => {
          const { subtitle, desc, id } = article;
          return (
            <article className='article-card' key={id}>
              <div className='article-img'>
                <img src={art1img} alt={subtitle} />
                <div className='article-img-title'></div>
                <h2>{subtitle}</h2>
              </div>
              <div className='article-desc'>
                <p>{desc}</p>
                <button className='articles-btn'>Continuar Leyendo...</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
