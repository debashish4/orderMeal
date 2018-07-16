import React, { Component } from 'react';
import ALL_MEALS from '../data/mealTypes';

const withAllMealsData = (WrappedComponet) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                mealList: [],
                currentId: 0
            }
        }
        componentDidMount() {
            let { match: { params: { id } } } = this.props;
            this.setState({
                currentId: id
            })

            ALL_MEALS.forEach((list, index) => {
                if (list.id == id) {
                    this.setState({
                        mealList: [...list.meals]
                    })
                }
            })
        }

        componentWillReceiveProps(newProps) {
            let { match: { params: { id } } } = newProps;

            this.setState({
                currentId: id
            })

            ALL_MEALS.forEach((list) => {
                if (list.id == id) {
                    this.setState({
                        mealList: [...list.meals]
                    })
                }
            })
        }

        render() {
            return (
                <WrappedComponet {...this.state}>
                </WrappedComponet>
            )
        }
    }
}

export default withAllMealsData;