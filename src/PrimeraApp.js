//import { Fragment } from "react";
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo2 } ) => {
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

export default PrimeraApp;

