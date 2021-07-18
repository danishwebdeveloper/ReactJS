import React, { Component } from 'react';
import { Home } from './HomeComponent';
import { About } from './AboutComponent';
import { Contact } from './ContactComponent';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    // console.log(state);
    return {
        mydishes: state.mydishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return ( <
                Home dish = { this.props.mydishes.filter((dish) => dish.featured)[0] }
                promotion = { this.props.promotion.filter((promo) => promo.featured)[0] }
                leader = { this.props.leaders.filter((leader) => leader.featured)[0] }
                />
            )
        }

        // Match component becasue we match the relevant item and them display that relevant item.
        const DishWithId = ({ match }) => {
            return ( <
                DishDetail dish = { this.props.mydishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                comments = { this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                />
            );
        };

        // we can't do it where we make route because of return, if we do below return statement is null showing errro
        const AboutUS = () => {
            return ( <
                About leaders = { this.props.leaders }
                />
            )
        }


        return ( <
            div >
            <
            Header / > { /* dishes passing props here */ } <
            Switch >
            <
            Route path = "/home"
            component = { HomePage }
            />  <
            Route exact path = "/menu"
            component = {
                () => < Menu dishes = { this.props.mydishes }
                />} / >

                { /* New route after click and get dishId from Menu component where items came from dishdetail component */ }

                <
                Route path = "/menu/:dishId"
                component = { DishWithId }
                />  <
                Route exact path = "/contactus"
                component = { Contact }
                />  <
                Route path = "/aboutus"
                component = { AboutUS }
                />  <
                Redirect to = "/home" / >
                <
                /Switch>

                <
                Footer / >
                <
                /div>
            );
        }
    }


    export default withRouter(connect(mapStateToProps)(Main));