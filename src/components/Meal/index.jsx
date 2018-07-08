import React, { Component } from 'react';
import './meal.css';

import {Link} from 'react-router-dom';


class Meal extends Component {
    constructor() {
        super();
        this.handleOrder = this.handleOrder.bind(this)
    }

    handleOrder(){
        console.log('handle order clicked');

    }


    render() {
        console.log("meal props", this.props);
        let {name,price,categoryId,imageUrl,mealId} = this.props;
        return (
            <div id="meal">
                <div className="image-container">
                    <img src={this.props.imageUrl} alt="" />
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
}

export default Meal;