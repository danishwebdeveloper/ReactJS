import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
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
            Navbar dark color = "primary" >
            <
            div className = "container" >
            <
            NavbarBrand href = "/" > Extra Blatt Resturant!! < /NavbarBrand> <
            /div> <
            /Navbar>

            { /* dishes passing props here */ }

            <
            Menu dishes = { this.state.mydishes }
            onClick = {
                (dishId) => this.onDishSelect(dishId) }
            /> <
            DishDetail dish = { this.state.mydishes.filter((dish) => dish.id === this.state.selectedDish)[0] }
            /> <
            /div>
        );
    }
}