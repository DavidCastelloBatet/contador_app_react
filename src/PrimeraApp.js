//import { Fragment } from "react";


const PrimeraApp = ( { saludo2, subtitulo } ) => {
  const nombre = 'David'
  const numeros = [1,2,3,4,5]
  const saludo = {
    nombre: 'David',
    edad: 35,
  }

  return ( 
    <>
      <h1>Hola { nombre }</h1>  
      <h3>Componente: { numeros }</h3>
      <p>lorem { saludo.nombre }</p>
      <p>desde props: { saludo2 }</p>
      <p>por defecto: { subtitulo }</p>
    </>
  )
}
// Las PropTypes de React nos pemiten verificar los tipos de las props 
// de nuestros componentes. De esta forma, en desarollo, podemos saber 
// si estamos pasándole al componente los tipos de datos correctos.
PrimeraApp.propTypes = {
  //saludo2: PropTypes.string,
  // Con el .isRequired hacemos que la prop sea obligatoria
  saludo2: PropTypes.string.isRequired,
  
}
// como poner defaultProps, (props por defecto).
PrimeraApp.defaultProps = {
  subtitulo: 'PropTypes por default',
}

export default PrimeraApp;

