import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';



export class MyClassComponent extends Component{
    render(){
        return(
            <div className="App">
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/"> Hello CLASS COMPONENT THERE!! </NavbarBrand>
                 </div>
            </Navbar>
        </div>
        );
    }
}