import React, { useState, useEffect } from 'react';
import { articles } from '../Utils/constants';
import { Loading } from '../Components';

const Articles = () => {
  // Getting Data
  const [myArticles, setMyArticles] = useState([]);
  useEffect(() => {
    setMyArticles(articles);
  }, []);

  // Loading:
  if (myArticles.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <section className='articlesContainer'>
      <div className='articles-center'>
        {myArticles.map((article) => {
          const { subtitle, desc, id } = article;
          return (
            <article className='article-container' key={id}>
              {/* Falta Imagen */}
              <h2>{subtitle}</h2>
              <p>{desc}</p>
              <button className='articles-btn'>Continuar Leyendo...</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
