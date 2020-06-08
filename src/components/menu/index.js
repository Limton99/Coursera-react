import React, {useState, useEffect} from "react";
import {Media, Card,  CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from "reactstrap";
import './menu.css';
import DishDetail from "../dish-detail";


const Menu = (props) => {

    const [selected, setState] = useState(null);

    const onDishSelected = (dish) => {
        setState(dish);
    };

    // const renderDish = (dish) => {
    //     if(dish != null) {
    //         return(
    //             <React.Fragment>
    //                 <div className="contain">
    //                     <Card className="card1">
    //                     <CardImg width="100%" object src={dish.image} alt={dish.name}/>
    //                     <CardBody>
    //                         <CardTitle>{dish.name}</CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //                     </Card>
    //                     <div className="card2">
    //                     <h1>Comments</h1>
    //                     {dish.comments.map(comment => {
    //                         return(
    //                             <li key={comment.id}>
    //                                 <h3>Author: {comment.author}</h3>
    //                                 <p>{comment.comment}</p>
    //                                 <p>{comment.date}</p>
    //                             </li>
    //                         );
    //                     })}
    //                     </div>
    //                 </div>
    //             </React.Fragment>
    //         );
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // };

    const menu = props.dishes.map(dish => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => onDishSelected(dish)}>
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
            <div className="row">
                <DishDetail selected={selected}/>

            </div>
        </div>
    );
};

export default Menu;