import React from 'react';
import './MealsList.css';
import WithAllMealsData from '../../HOC/WithAllMealsData';
import Meal from '../../components/Meal';


const renderAllMeals = function (list, currentId) {
    return list.map((item, index) => {
        return <Meal categoryId={currentId} mealId={item.id} key={index} name={item.name} imageUrl={item.url} />
    })
}

const MealsList = function ({ mealList, currentId }) {
    return (
        <div id="meals-list" className="clearfix">
            <div className="meals-card">
                {renderAllMeals(mealList, currentId)}
            </div>
        </div>
    )
}

export default WithAllMealsData(MealsList);