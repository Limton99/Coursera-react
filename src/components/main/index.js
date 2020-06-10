import React, {Component} from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../menu';
import DishDetail from "../dish-detail";
import Home from "../Home";
import Contact from "../Contact";
import About from "../about/about";
import { addComment} from "../../redux/actions/CommentAction";
import { fetchDishes} from "../../redux/actions/DishAction";



class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
    }

    constructor(props) {
        super(props);

        // this.state = {
        //     dishes: DISHES,
        //     comments: COMMENTS,
        //     promotions: PROMOTIONS,
        //     leaders: LEADERS
        // };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            isLoading={this.props.dishes.isLoading}
                            errMess={this.props.dishes.errMess}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            addComment={this.props.addComment}
                />
            );
        };

        return (


            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />} />
                    <Redirect to="/home" />
                </Switch>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);