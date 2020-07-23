/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../assets/css/category/Category.css';

function Category({
  id, title, image,
}) {
  const SearchMore = (e) => {
  };

  return (
    <div className="category">
      <p>{title}</p>
      <img className="category__image" src={image} alt={title} />
      <Link to="/products" onClick={SearchMore}>Ver Mas</Link>
    </div>
  );
}

export default Category;