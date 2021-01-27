import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { articles } from '../Utils/constants';

const ArticlePage = () => {
  const { slug } = useParams();
  const history = useHistory();
  // Find Article by slug:
  const myArticle = articles.find((art) => art.slug === slug);
  // Main
  return (
    <div className='section'>
      <h1>Article</h1>
    </div>
  );
};

export default ArticlePage;
