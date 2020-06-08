import React, {useState, useEffect} from "react";
import {Media, Card,  CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from "reactstrap";


const Menu = (props) => {

    const [selected, setState] = useState(null);

    const onDishSelected = (dish) => {
        setState(dish);
    };

    const renderDish = (dish) => {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    };

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
                {renderDish(selected)}
            </div>
        </div>
    );
};

export default Menu;