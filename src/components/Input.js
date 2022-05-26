import React, { Component, Fragment } from 'react';
import Noticia from './Noticia';

class Counter extends Component {

  
    constructor(props) {
        super(props);

        this.state = {
            titulo: "",
        };
    }

    render(){
        console.log(this.state);
        return(
            <Fragment>
                <input value={this.state.titulo} ></input>         
            </Fragment>
        )
    }

}

export default Counter