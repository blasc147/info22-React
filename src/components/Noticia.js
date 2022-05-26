function Noticia(props) {

  const noticia = {
    titulo : "Curso react 2022",
    descripcion: "esto es una demostracion de desestructuracion de objetos"
  }

  const { titulo, descripcion } = props

  const increment = () => {
    console.log("increment");
    props.handleClick()
  }

  return (
      <div className="mi-clase">
        <button onClick={increment}>+</button>
        <h1 className='mi-titulo'>{props.cont} </h1>
      
      </div>
  )

}

export default Noticia