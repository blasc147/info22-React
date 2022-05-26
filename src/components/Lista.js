import React, { Component, Fragment } from 'react';

class Lista extends Component {

    state = {
        titulo: "titulo de la lista"
    }

    render(){
        const { titulo } = this.props
        return(
            <Fragment>
                <h1 className='titulo-verde'>{titulo}</h1>
            </Fragment>
        )
    }

}

export default Lista