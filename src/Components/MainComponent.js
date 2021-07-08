import React, { Component } from 'react';
import { Home } from './HomeComponent';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydishes: DISHES,
        }
    }

    render() {

        const HomePage = () => {
            return ( <
                Home / >
            )
        }

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