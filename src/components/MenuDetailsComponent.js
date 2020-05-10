import React, {component, Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class MenuDetails extends Component{
    constructor(props){
        super(props);

        this.State={
        }
    }

    render(){
        return(
          <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.Name}></CardImg>
            <CardBody>
              <CardTitle>
                {this.props.dish.name}
              </CardTitle>
              <CardText>
                {this.props.dish.description}
              </CardText>

            {this.props.dish.comments.map((test)=>
            {
              return(

              <div className="col-12 col-md-5 m-1">
                <CardText>{test.comment}    --
                {test.author}  {test.date}</CardText>
                </div>
              );

            })
          }
              </CardBody>
              </Card>
              </div>

        );   
    }
  }



export default MenuDetails