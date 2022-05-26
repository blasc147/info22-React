import React, { Component, Fragment } from 'react';
import { Form } from "react-bootstrap"

class CreateForm extends Component {

  
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render(){

        return(
            <Fragment>  
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingresar titulo</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="titulo"
                            value={this.props.formValues.titulo} 
                            onChange={this.props.onChange}
                        />
                    </Form.Group>
                    </Form>
            </Fragment>
        )
    }

}

export default CreateForm