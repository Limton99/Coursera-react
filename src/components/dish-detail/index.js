import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import './detail.css'

//I use react hooks

const DishDetail = (props) => {
    const {dish} = props;
    const render = (dish) => {
        if(dish != null) {
            return(
                <React.Fragment>
                    <div className="contain">
                        <Card className="card1">
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        <div className="card2">
                            <h1>Comments</h1>
                            {dish.comments.map(comment => {
                                return(
                                    <li key={comment.id}>
                                        <h3>Author: {comment.author}</h3>
                                        <p>{comment.comment}</p>
                                        <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    };


   return (
       <div>
           {render(dish)}
       </div>
   );
};

export default DishDetail;