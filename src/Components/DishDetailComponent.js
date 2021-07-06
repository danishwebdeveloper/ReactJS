import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    rendercomments(comments) {
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

    renderdish() {
        return ( <
            div className = "col-12 col-md-5 m-1" >
            <
            CardImg width = "100%"
            src = { this.props.dish.image }
            alt = { this.props.dish.name }
            /> <
            CardBody >
            <
            CardTitle > { this.props.dish.name } <
            /CardTitle> <
            CardText > { this.props.dish.description } <
            /CardText> <
            /CardBody> <
            /div>
        )
    }

    render() {
        if (this.props.dish != null) {

            return ( <
                div className = "row" > { this.renderdish(this.props.dish) } { this.rendercomments(this.props.dish.comments) } <
                /div>
            );
        }

        return <div >

            <
            /div>;
    }
}