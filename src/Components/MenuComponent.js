import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



export class Menu extends Component {
    constructor(props) {
            super(props);
            // console.log('the component constructor is invoked');

            //state define for Onlclick Function
            // this.state = {
            //     selectedDish: null

            //     // detaildishes: Detail,
            //     // onGreet(dish){
            //     //     // <Detail detaildata={ this.state.onGreet(dish) } />
            //     //     alert("JUST FOR CHECKING BROTHER")
            //     // }
            // }
        }
        // onDishSelect(dish){
        // }

    // OnClick Funtionality and its render function

    //    onDishSelect(dish){
    //         this.setState({
    //              selectedDish:dish
    //             });

    //     }   
    // renderDish(dish) {
    //     if(dish != null){
    //     //    console.log(dish);
    //         return(

    //             // OnClick check arguments
    //             // <Detail ddish="Passvalue selected value"/>

    //             <Detail ddish={this.state.renderDish}/>
    //             // <Card>
    //             //     <CardImg width="100%" src={dish.image} alt={dish.name}/>
    //             //     <CardBody>
    //             //         <CardTitle>{dish.name}</CardTitle>
    //             //         <CardText>{dish.description}</CardText>
    //             //     </CardBody>
    //             // </Card>
    //         )
    //     }else{
    //         return(
    //             <div>   

    //             </div>
    //         )
    //     }
    // }
    //Render at the end, so we can assign value according to need 
    // componentDidMount(){
    //     console.log('the ComponentDidMount is invoked');
    // }
    // Main Template/Render of the Page

    render() {

        //    <Card key={dish.id} onClick={()=>this.state.onDishSelect(dish)}>

        // console.log('the render is invoked');
        const menu = this.props.dishes.map((dish) => {
            return ( <
                div key = { dish.id }
                className = "col-12 col-md-5 m-1" > { /* <Detail storeinfo={this.state.dish} /> */ } { /* Make onclick function and passs argument as a dish */ } <
                Card key = { dish.id }
                onClick = {
                    (dishId) => this.props.onClick(dish.id) } >

                <
                CardImg width = "100%"
                src = { dish.image }
                alt = { dish.name }
                /> <
                CardImgOverlay >
                <
                CardTitle > { dish.name } < /CardTitle> <
                /CardImgOverlay> <
                /Card> <
                /div>
            )
        })
        return ( <
            div className = "container" >
            <
            div className = "row" > { menu } <
            /div> { /* <div className="row"> */ } { /* {this.renderDish(this.state.selectedDish)} */ } { /* <Detail dish={this.state.selectedDish}/> */ }

            { /* </div> */ }

            <
            /div>

        );
    }
}