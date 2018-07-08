import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './components/Category/';
import { CATEGORIES } from './data/mealCategories';
import MealsList from './pages/MealsList';
import Order from './pages/Order';
import Features from './pages/Features';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    renderCategories(CATEGORIES) {
        console.log(CATEGORIES);

        return CATEGORIES.map((category, index) => {
            return <Category key={index} id={category.id} image={category.url} name={category.name}></Category>
        })
    }

    renderMainpage() {
        return <main>
            <div className="sidebar">
                <div className="resturant">
                    <img src="/images/resturant.jpg" alt="" />
                </div>
                {this.renderCategories(CATEGORIES)}
            </div>
            <div className="main-content">
                <Route path="/meal/:id" component={MealsList}></Route>
                <Route exact path="/" component={Features}></Route>
            </div>
        </main>
    }

    render() {
        console.log('app props', this.props);
        return (
            <div id="app" className="clearfix">
                <Switch>
                    <Route exact path="/order/:categoryId/:mealId" component={Order}></Route>
                    <Route path="/" render={
                        () => this.renderMainpage()
                    }></Route>
                </Switch>
            </div>
        )
    }
}
export default App;