import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from './Components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { MyFunctionalComponent } from './Components/MyFunctionalComponent';
import { MyClassComponent } from './Components/MyClassComponent';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mydishes: DISHES
        }
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
            /Navbar> { /* dishes as props here */ } <
            Menu dishes = { this.state.mydishes }
            /> <
            /div>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2 className="App-title">Welcome to Hamza</h2>
//         <p>
//           {/* <MyFunctionalComponent/> */}
//            <MyClassComponent/>
//            Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

//       </header>

//     </div>
//   );
// }
export default App;