import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PersonajeCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Link to={`/detalle/${item.id}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Card.Text>{item.created}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PersonajeCard
