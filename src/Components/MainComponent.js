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
            comment: COMMENTS,
            promotion: PROMOTIONS,
        }
    }

    render() {

        const HomePage = () => {
                return (
                    // pass props and also make as featured true then show otherwise don't display others from these components */
                    <
                    Home dish = { this.state.mydishes.filter((dish) => dish.featured)[0] }
                    leader = { this.state.leaders.filter((leader) => leader.featured)[0] }
                    promotion = { this.state.promotion.filter((proms) => proms.featured)[0] }
                    comment = { this.state.comment.filter((comm) => comm.featured)[0] }
                    />
                )
            }
            // const AboutUs = () => {
            //   return(
            //     <About />
            //   )
            // }

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
                <
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