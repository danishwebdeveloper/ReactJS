import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export class Menu extends Component {
    constructor(props) {
            super(props);


            //state define for Onlclick Function
            this.state = {
                selectedDish: null
            }
        }
        // OnClick Funtionality and its render function
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
            return ( <
                Card >
                <
                CardImg width = "100%"
                src = { dish.image }
                alt = { dish.name }
                /> <
                CardBody >
                <
                CardTitle > { dish.name } < /CardTitle> <
                CardText > { dish.description } < /CardText> <
                /CardBody> <
                /Card>
            )
        } else {
            return ( <
                div > < /div>
            )
        }
    }

    // Main Template of the Page
    render() {

        const menu = this.props.dishes.map((dish) => {
            return ( <
                div key = { dish.id }
                className = "col-12 col-md-5 m-1" >

                { /* Make onclick function and passs argument as a dish */ } <
                Card onClick = {
                    () => this.onDishSelect(dish) } >
                <
                CardImg width = "100%"
                src = { dish.image }
                alt = { dish.name }
                /> <
                CardImgOverlay >
                <
                /CardImgOverlay> <
                CardTitle > { dish.name } < /CardTitle>

                <
                /Card> <
                /div>
            )
        })
        return ( <
            div className = "container" >
            <
            div className = "row" > { menu } <
            /div>

            <
            div className = "row" > { this.renderDish(this.state.selectedDish) } <
            /div>

            <
            /div>

        );
    }
}