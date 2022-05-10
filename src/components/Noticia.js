function Noticia() {
  
    const noticia = {
      titulo : "Curso react 2022",
      descripcion: "esto es una demostracion de desestructuracion de objetos"
    }

    const { titulo, descripcion } = noticia

    return (
        <div className="mi-clase">
          <h1 className='mi-titulo'>Mi noticia: {titulo} </h1>
        </div>
    )

}

export default Noticia