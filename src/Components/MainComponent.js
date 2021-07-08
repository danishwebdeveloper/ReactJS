import React, { Component } from 'react';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent'
import { DISHES } from '../shared/dishes';


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }

    render() {
        return ( <
            div >

            <
            Header / >

            { /* dishes passing props here */ }

            <
            Menu dishes = { this.state.mydishes }
            onClick = {
                (dishId) => this.onDishSelect(dishId) }
            /> <
            DishDetail dish = { this.state.mydishes.filter((dish) => dish.id === this.state.selectedDish)[0] }
            /> <
            Footer / >
            <
            /div>
        );
    }
}