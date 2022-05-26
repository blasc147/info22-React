import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import CreateForm from "../components/CreateForm"
import CardComponent from "../components/CardComponent"

class Home extends Component {

  
    constructor(props) {
        super(props);

        this.state = {
            form : {
                 titulo: ""   
            }
        };
    }


    handleChange = e => {
        this.setState({
            form : {
                titulo: e.target.value,
            }
        })
        
    }

    render(){

        return(
            <Fragment>  
                <Header></Header>
                <CreateForm formValues={this.state.form} onChange={this.handleChange}></CreateForm>
                <CardComponent titulo={this.state.form.titulo}></CardComponent>
            </Fragment>
        )
    }

}

export default Home