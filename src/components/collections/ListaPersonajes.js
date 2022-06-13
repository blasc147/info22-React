import { useEffect, useState } from 'react'
import { Card, Spinner, Alert, Button } from 'react-bootstrap'
import axios from 'axios'
import PersonajeCard from './PersonajeCard'

function ListaPersonajes() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [datos, setDatos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setDatos([...datos, ...response.data.results])
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
      })
  }, [page])

  const cargarMas = (e) => {
    e.preventDefault()
    setPage(page + 1)
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
                      <PersonajeCard item={item}></PersonajeCard>
                    </Card>
                  </div>
                )
              })
            ) : (
              <Alert>No hay elementos</Alert>
            )}
          </div>
          {loading ? (
            <Button variant="success" disabled={true}>
              Cargando ...
            </Button>
          ) : (
            <Button variant="success" onClick={cargarMas}>
              Cargar mas +
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default ListaPersonajes
