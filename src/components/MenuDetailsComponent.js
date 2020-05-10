import React, {component, Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class MenuDetails extends Component{
    constructor(props){
        super(props);

        this.State={
        }
    }

RenderDetails(dish){
      return(
        <Card>
        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.Name}></CardImg>
        <CardBody>
          <CardTitle>
            {this.props.dish.name}
          </CardTitle>
          <CardText>
            {this.props.dish.description}
          </CardText> 
      </CardBody>
      </Card>
      );
    }

RenderComments(dish){
  const comments = dish.comments.map((comment)=>
      {
        return(
          <CardText>{comment.comment}    --
          {comment.author}  {comment.date}</CardText>
        );
      });  
}

render(){
        return(
          <div className="col-12 col-md-5 m-2">
            <div className="row">
            {this.RenderDetails(this.props.dish)};</div>
            <div className="row">
            {this.RenderComments(this.props.dish)};
            </div>
          
          </div>

        );   
    }
  }



export default MenuDetails