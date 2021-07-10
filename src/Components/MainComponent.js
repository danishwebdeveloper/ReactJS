import React, { Component } from 'react';
import { Home } from './HomeComponent';
import { About } from './AboutComponent';
import { Contact } from './ContactComponent';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydishes: DISHES,
            leaders: LEADERS,
            comments: COMMENTS,
            promotion: PROMOTIONS
        }
    }

    render() {

        const HomePage = () => {
            return ( <
                Home dish = { this.state.mydishes.filter((dish) => dish.featured)[0] }
                promotion = { this.state.promotion.filter((promo) => promo.featured)[0] }
                leader = { this.state.leaders.filter((leader) => leader.featured)[0] }
                />
            )
        }

        const DishWithId = ({ match }) => {
            return ( <
                DishDetail dish = { this.state.mydishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                comments = { this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                />
            );
        };

        return ( <
            div >
            <
            Header / > { /* dishes passing props here */ } <
            Switch >
            <
            Route path = "/home"
            component = { HomePage }
            /> <
            Route exact path = "/menu"
            component = {
                () => < Menu dishes = { this.state.mydishes }
                />} / >

                { /* New route after click and get dishId from Menu component where items came from dishdetail component */ } <
                Route path = "/menu/:dishId"
                component = { DishWithId }
                /> <
                Route exact path = "/contactus"
                component = { Contact }
                /> <
                Route path = "/aboutus"
                component = { About }
                />

                <
                Redirect to = "/home" / >
                <
                /Switch>

                <
                Footer / >
                <
                /div>
            );
        }
    }