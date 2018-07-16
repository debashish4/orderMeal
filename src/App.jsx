import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './components/Category/';
import { CATEGORIES } from './data/mealCategories';
import MealsList from './pages/MealsList';
import Order from './pages/Order';
import Features from './pages/Features';
import './App.css';


function renderCategories(CATEGORIES) {
    return CATEGORIES.map((category, index) => {
        return <Category key={index} id={category.id} image={category.url} name={category.name}></Category>
    })
}

let MainPage = () => {
    return (
        <main>
            <div className="sidebar">
                <div className="resturant">
                    <img src="/images/resturant.jpg" alt="" />
                </div>
                {renderCategories(CATEGORIES)}
            </div>
            <div className="main-content">
                <Route path="/meal/:id" component={MealsList}></Route>
                <Route exact path="/" component={Features}></Route>
            </div>
        </main>
    )
}


class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div id="app" className="clearfix">
                <Switch>
                    <Route path="/order/:categoryId/:mealId" component={Order}></Route>
                    <Route path="/" component={MainPage}></Route>
                </Switch>
            </div>
        )
    }
}
export default App;