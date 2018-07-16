import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';

const Category =({id,name,image}) =>{
      return (
          <div className="category">
              <Link to={`/meal/${id}`}>
                  <div className="category-desc">
                      <img src={image} alt="" />
                      <p className="title">{name}</p>
                  </div>
              </Link>
          </div>
      )
}
export default Category;
