import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'

class Lista extends Component {
  state = {
    titulo: 'titulo de la lista',
    elementos: [
      'This is some text within a card body.',
      'This is some text within a card body.',
      'This is some text within a card body.',
    ],
  }

  render() {
    const elementos = [
      'This is some text within a card body.',
      'This is some text within a card body 2.',
      'This is some text within a card body 3.',
    ]
    const { titulo } = this.props
    return (
      <Fragment>
        {elementos.map((item) => {
          return (
            <Card>
              <Card.Body>{item}</Card.Body>
            </Card>
          )
        })}
      </Fragment>
    )
  }
}

export default Lista
