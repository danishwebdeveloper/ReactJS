// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    if (comments != null) {
        return ( <
            div className = "col-12 col-md-5 m-1" >
            <
            h4 > COMMENTS < /h4> <
            ul className = "list-unstyled" > {
                comments.map((comnt) => {
                    return ( <
                        li key = { comnt.id } >
                        <
                        p > { comnt.comment } < /p> <
                        p > { comnt.author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comnt.date))) } < /p> <
                        /li>
                    );
                })
            } <
            /ul> <
            /div>

        )
    } else {
        return ( <
            div >

            <
            /div>
        )
    }
}

function RenderDish({ dish }) {
    return ( <
        div className = "col-12 col-md-5 m-1" >
        <
        CardImg width = "100%"
        src = { dish.image }
        alt = { dish.name }
        /> <
        CardBody >
        <
        CardTitle > { dish.name } <
        /CardTitle> <
        CardText > { dish.description } <
        /CardText> <
        /CardBody> <
        /div>
    )
}

export const DishDetail = (props) => {
    if (props.dish != null) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem > < Link to = "/home" > Home < /Link> <
            /BreadcrumbItem> <
            BreadcrumbItem active > { props.dish.name } <
            /BreadcrumbItem> <
            /Breadcrumb> <
            div className = "col-12" >
            <
            h3 > { props.dish.name } < /h3> <
            hr / >
            <
            /div> <
            /div> <
            div className = "row" >
            <
            div className = "col-12 col-md-5 m-1" >
            <
            RenderDish dish = { props.dish }
            /> <
            /div> <
            div className = "col-12 col-md-5 m-1" >
            <
            RenderComments comments = { props.comments }
            /> <
            /div> <
            /div> <
            /div>
        );
    }

    return <div >

        <
        /div>;
}