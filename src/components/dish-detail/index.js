import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const DishDetail = (props) => {
    const {selected} = props;
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
                                        <p>{comment.date}</p>
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
           {render(selected)}
       </div>
   );
};

export default DishDetail;