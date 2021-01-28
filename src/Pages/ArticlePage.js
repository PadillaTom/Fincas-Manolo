import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../Utils/constants';

const ArticlePage = () => {
  const { slug } = useParams();
  // Find Article by slug:
  const myArticle = articles.find((art) => art.slug === slug);
  const { title, contentTitle, content, imgUrl } = myArticle;

  // Main
  return (
    <section className='section'>
      <div className='section-center'>
        <h2 className='page-title'>{title}</h2>
        <h3 className='page-subtitle'>{contentTitle}</h3>
      </div>
      {/* Content */}
      <img src={imgUrl} alt={title} className='articleImg' />
      <div className='articleContent'>
        <p className='article-content'>{content}</p>
      </div>
    </section>
  );
};

export default ArticlePage;
