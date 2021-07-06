import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Main } from './Components/MainComponent';
import './App.css';



class App extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     mydishes:DISHES
    //   }
    // }

    render() {
        return ( <
            div > {
                /* <Navbar dark color="primary">
                            <div className="container">
                          <NavbarBrand href="/"> Extra Blatt Resturant!! </NavbarBrand>
                               </div>
                          </Navbar> */
            }

            { /* dishes passing props here */ }

            { /* <Menu dishes={ this.state.mydishes }/> */ }

            <
            Main / >


            <
            /div>
        );
    }
}
export default App;