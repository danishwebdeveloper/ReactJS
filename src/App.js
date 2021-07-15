import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Main } from './Components/MainComponent';
import { Menu } from './Components/MenuComponent';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';


// After this our store component is available for all the component becasue we use it in the Main Component(App)
export const store = ConfigureStore();


class App extends Component {
    render() {

        return ( <
            Provider store = { store } >
            <
            BrowserRouter >
            <
            Main / >
            <
            /BrowserRouter> <
            /Provider>
        );

    }
}
export default App;