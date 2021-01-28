import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../Utils/constants';
import { Loading } from './Shared';

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
      <div className='section-center'>
        <h2 className='section-title'>
          Artículos <span>Blog</span>
        </h2>
      </div>
      <div className='articlesCard-container'>
        {myArticles.map((article) => {
          const { subtitle, desc, id, imgUrl, slug } = article;
          return (
            <article className='article-card' key={id}>
              <div className='article-img'>
                <img src={imgUrl} alt={subtitle} />
                <div className='article-img-title'></div>
                <h2>{subtitle}</h2>
              </div>
              <div className='article-desc'>
                <p>{desc}</p>
                <Link to={`/articles/${slug}`}>
                  <button className='articles-btn'>Continuar Leyendo...</button>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
