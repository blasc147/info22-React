import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetallePersonaje(props) {
  let { id } = useParams()

  useEffect(() => {
    console.log(id)
    //llamada api detalle
  })

  return <h1>Detalle del personaje : </h1>
}

export default DetallePersonaje
