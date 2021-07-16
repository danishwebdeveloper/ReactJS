// import React, { Component } from 'react';

//For Functional Component
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


//Functional Component 
export const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return ( <
            div key = { dish.id }
            className = "col-12 col-md-5 m-1" >
            <
            RenderMenuItem dish = { dish }
            />  <
            /div>
        )
    })

    function RenderMenuItem({ dish }) {
        return ( <
            Card >
            <
            Link to = { `/menu/${dish.id}` } >
            <
            CardImg width = "100%"
            src = { dish.image }
            alt = { dish.name }
            />  <
            CardImgOverlay >
            <
            CardTitle > { dish.name } < /CardTitle> </CardImgOverlay > < /Link> </Card >
        )
    }



    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        Breadcrumb >
        <
        BreadcrumbItem > < Link to = "/home" > Home < /Link> </BreadcrumbItem > < BreadcrumbItem active > Menu < /BreadcrumbItem> </Breadcrumb >
        <
        div className = "col-12" >
        <
        h3 > Menu < /h3>  <
        hr / >
        <
        /div> </div >
        <
        div className = "row" > { menu } < /div> </div >
    );
}