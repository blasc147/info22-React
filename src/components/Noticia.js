function Noticia(props) {

  const noticia = {
    titulo : "Curso react 2022",
    descripcion: "esto es una demostracion de desestructuracion de objetos"
  }

  const { titulo, descripcion } = props

  return (
      <div className="mi-clase">
        <h1 className='mi-titulo'>Mi noticia: {titulo} - {descripcion} </h1>
      </div>
  )

}

export default Noticia