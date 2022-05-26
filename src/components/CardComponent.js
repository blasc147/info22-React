import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';

class CardComponent extends Component {

  
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){

        return(
            <Fragment>
                <Card>
                    <Card.Body>
                        {this.props.titulo}
                    </Card.Body>
                </Card> 
            </Fragment>
        )
    }

}

export default CardComponent