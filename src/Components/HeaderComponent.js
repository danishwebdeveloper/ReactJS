import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export class Header extends Component {
    render() {
        return ( <
            >
            <
            Navbar dark >
            <
            div className = "container" >
            <
            NavbarBrand href = "/" > Extra Blatt Resturant!! < /NavbarBrand> <
            /div> <
            /Navbar> <
            Jumbotron >
            <
            div className = "container" >
            <
            div className = "row row-header" >
            <
            div className = "col-12 col-sm-6" >
            <
            h1 > Extra Blatt Resturant!! < /h1> <
            p > This is a Resturant that inpired from Instalian Resturant in Italy. < /p> <
            /div> <
            /div> <
            /div> <
            /Jumbotron> <
            />
        )
    }
}