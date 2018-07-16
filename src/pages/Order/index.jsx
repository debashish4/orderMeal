import React from 'react';
import './Order.css';
import ALL_MEALS from '../../data/mealTypes';
import {Link} from 'react-router-dom';

class Order extends React.Component {
    constructor() {
        super();

        this.state = {
            orderId: 0,
            orderItemImage: ""
        }
    }
    componentDidMount() {
        let { match: { params: { categoryId, mealId } } } = this.props;

        ALL_MEALS.map((item, index) => {
            if (item.id == categoryId) {
                item.meals.map((mealItem, index) => {
                    if (mealItem.id == mealId) {
                        this.setState({
                            orderItemImage: mealItem.url,
                            orderItemName: mealItem.name
                        })
                    }
                })
            }
        })
    }

    render(props) {
        return (
            <div id="order">
                <div className="order-placed">
                    <p className="msg">Your order has been placed succussfully</p>
                    <img src={this.state.orderItemImage}/>
                    <div className="order-Info">
                        <p>{this.state.orderItemName}</p>
                        <p>Order Id #102335</p>
                        <Link to="/">New Order</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;