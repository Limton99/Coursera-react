import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../menu';
import DishDetail from "../dish-detail";
import { DISHES } from '../../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "../Home";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                />
            );
        }
        return (


            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu:id' component={DishDetail} exact/>
                    <Redirect to="/home" />
                </Switch>

            </div>
        );
    }
}

export default Main;