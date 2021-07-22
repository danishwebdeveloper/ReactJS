// import React, { Component } from 'react';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Fragment, Nav, NavItem, Button, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class Commentsubmit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModelOpen: false
        }
        this.toggleModel = this.toggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }

    handleLogin(values) {
        this.toggleModel(); //Its Basically use to reset or Close the toogle model completely
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));

    }

    render() {
        return ( <
            React.Fragment >
            <
            Button outline onClick = { this.toggleModel } >
            <
            span className = "fa fa-file-text-o fa-md" > Submit Comment < /span> <
            /Button> <
            Modal isOpen = { this.state.isModelOpen }
            toggle = { this.toggleModel } > { /* Toogle Header */ } <
            ModalHeader toggle = { this.toggleModel } >
            Submit COMMENT <
            /ModalHeader> <
            ModalBody >
            <
            LocalForm onSubmit = {
                (values) => this.handleLogin(values) } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "rating"
            md = { 2 } > Rating < /Label> <
            Col md = { 10 } >
            <
            Control.select model = ".rating"
            id = "rating"
            name = "rating"
            className = "form-control"

            >
            <
            option > Please Select < /option> <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 < /option> <
            option > 4 < /option> <
            option > 5 < /option> <
            /Control.select> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "uname"
            md = { 2 } > Your Name < /Label> <
            Col md = { 10 } >
            <
            Control.text model = ".uname"
            id = "uname"
            name = "uname"
            placeholder = "Your Name"
            className = "form-control"
            validators = {
                {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                }
            }
            /> <
            Errors className = "text-danger"
            model = ".uname"
            show = "touched"
            messages = {
                {
                    required: 'Required',
                    minLength: 'Must be Greater than 2 Character',
                    maxLength: 'Must be less than or equal to 15 character'
                }
            }
            /> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "comment"
            md = { 2 } > Comment < /Label> <
            Col md = { 10 } >
            <
            Control.textarea model = ".comment"
            id = "comment"
            name = "comment"
            placeholder = "Comment"
            className = "form-control" /
            >
            <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Col md = { 10 } >
            <
            Button type = "submit"
            value = "button"
            color = "primary" >
            Submit <
            /Button> <
            /Col> <
            /Row> <
            /LocalForm> <
            /ModalBody> <
            /Modal> <
            /React.Fragment>
        )
    }
}


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
            /ul> { /* Comment Submission Component Import From CommentFormComponent */ } <
            div className = "row" >
            <
            Commentsubmit / >
            <
            /div> <
            /div>
        )

    } else {
        return ( <
            div > { /* <Commentsubmit /> */ } <
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