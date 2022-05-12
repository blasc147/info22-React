import React, { Component, Fragment } from 'react';
import Noticia from './Noticia';

class ClassComponent extends Component {

    render(){
        const { titulo } = this.props
        return(
            <Fragment>
                <h1 className='titulo-verde'>{titulo}</h1>
            </Fragment>
        )
    }

}

export default ClassComponent