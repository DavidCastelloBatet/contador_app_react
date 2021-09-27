//import { Fragment } from "react";


const PrimeraApp = ( { saludo2 = 'Por defecto' } ) => {
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


export default PrimeraApp;

