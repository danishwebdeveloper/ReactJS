import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Main } from './Components/MainComponent';
import { Menu } from './Components/MenuComponent';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {

        return ( <
            BrowserRouter >
            <
            Main / >
            <
            /BrowserRouter>
        );

    }
}
export default App;