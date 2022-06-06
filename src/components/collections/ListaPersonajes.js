import { useEffect, useState } from 'react'
import { Card, Spinner, Alert } from 'react-bootstrap'
import axios from 'axios'

function ListaPersonajes() {
  const [loading, setLoading] = useState(false)
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setDatos(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (loading) {
    return (
      <div className="py-5">
        <div className="container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-5">
        <div className="container">
          <Alert>This is a {error}</Alert>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
            {datos && datos.length > 0 ? (
              datos.map((item) => {
                return (
                  <div className="col-md-4 py-5">
                    <Card>
                      <Card>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.created}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Card>
                  </div>
                )
              })
            ) : (
              <Alert>No hay elementos</Alert>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaPersonajes
