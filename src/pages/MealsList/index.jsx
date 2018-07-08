import React, { Component } from 'react';
import './MealsList.css';

import Meal from '../../components/Meal';
import ALL_MEALS from '../../data/mealTypes';

class MealsList extends Component {
    constructor() {
        super();

        this.state = {
            mealList: [],
            currentId: 0
        }

    }

    componentDidMount() {
        console.log('props-mealsList-component mount', this.props);
        let { match: { params: { id } } } = this.props;
        this.setState({
            currentId: id
        })

        ALL_MEALS.forEach((list, index) => {
            if (list.id == id) {
                console.log('here');
                this.setState({
                    mealList: [...list.meals]
                })
            }
        })
    }

    componentWillReceiveProps(newProps) {
        let { match: { params: { id } } } = newProps;
        console.log('newProps id', id);

        this.setState({
            currentId: id
        })

        ALL_MEALS.forEach((list, index) => {
            if (list.id == id) {
                console.log('here');
                this.setState({
                    mealList: [...list.meals]
                })
            }
        })
    }

    renderAllMeals(list) {
        console.log("list", list);
        return list.map((item, index) => {
            return <Meal categoryId={this.state.currentId} mealId={item.id} key={index} name={item.name} imageUrl={item.url} />
        })

    }

    render() {
        console.log('i am rendering');
        return (
            <div id="meals-list" className="clearfix">
                <div className="meals-card">
                    {this.renderAllMeals(this.state.mealList)}
                </div>
            </div>
        )
    }
}

export default MealsList;