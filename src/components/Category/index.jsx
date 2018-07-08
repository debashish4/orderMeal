import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './category.css';

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id } = this.props;
        return (
            <div className="category">
                <Link to={`/meal/${id}`}>
                    <div className="category-desc">
                        <img src={this.props.image} alt="" />
                        <p className="title">{this.props.name}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Category;
