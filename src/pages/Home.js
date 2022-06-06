import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import CardComponent from '../components/CardComponent'
import Lista from '../components/Lista'
import CiclodeVida from '../components/CicloDeVida'
import ListaPersonajes from '../components/collections/ListaPersonajes'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        titulo: '',
      },
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        titulo: e.target.value,
      },
    })
  }

  render() {
    return (
      <Fragment>
        <ListaPersonajes></ListaPersonajes>
      </Fragment>
    )
  }
}

export default Home
