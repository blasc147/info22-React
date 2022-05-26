import React, { Component, Fragment } from 'react';
import Noticia from './Noticia';

class Counter extends Component {

  
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    decrement(){
        if(this.state.counter>0){
            this.setState({
                counter: this.state.counter -1
            })
        }
        
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        console.log(this.state);
        return(
            <Fragment>
                <div className='flex-counter'>
                    <button onClick={this.decrement} >-</button>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.increment}>+</button>
                </div>
                <Noticia cont={this.state.counter} handleClick={this.increment} ></Noticia>  
                <Noticia cont={this.state.counter}></Noticia> 
                <Noticia cont={this.state.counter}></Noticia>              
            </Fragment>
        )
    }

}

export default Counter