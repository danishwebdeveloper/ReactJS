// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({ comments }) {
    return ( <
        div className = "col-12 col-md-5 m-1" >
        <
        h4 > COMMENTS < /h4> <
        ul > {
            comments.map((comnt) =>

                <
                li key = { comnt.id } >
                <
                p > { comnt.comment } < /p> <
                p > { comnt.author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comnt.date))) } < /p> <
                /li>
            )
        } <
        /ul> <
        /div>
    )
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
            div className = "row" >
            <
            RenderDish dish = { props.dish }
            /> <
            RenderComments comments = { props.dish.comments }
            /> <
            /div>
        );
    }

    return <div >

        <
        /div>;
}