import React from 'react';
import './meal.css';
import { Link } from 'react-router-dom';


const Meal = function ({ name, price, categoryId, imageUrl, mealId }) {
    return (
        <div id="meal">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="image-description">
                <p className="title">{name}</p>
                <p className="desc">description here</p>
                <p className="price">{price}</p>
                <Link to={`/order/${categoryId}/${mealId}`}>Order</Link>
            </div>
        </div>
    )
}
export default Meal;