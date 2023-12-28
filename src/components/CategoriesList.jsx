// src/components/CategoriesList.js
import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);

  return (
    <div>
      <h2>Categories</h2>
      {status}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
