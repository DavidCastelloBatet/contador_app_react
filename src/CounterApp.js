import { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value }) =>{

  const [counter, setCounter ] = useState( value );

  // handleAdd
  const handleAdd = () => {
    // setCounter( (c) => c + 1 );
    setCounter( counter + 1);
  }

  const handleSubstract = () => {
    setCounter ( counter - 1);
  }

  const handleReset = () => {
    setCounter ( value );
  }
  
  // handleAdd event (e). La e es un objeto con la información del evento
  // de react. Tiene un monton de propiedades.
  const handleAddEvent = (e) => {
    return console.log(e)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      { /* evento onClick*/}
      <button onClick={ handleAdd }>+ 1</button> 
      <button onClick={ handleSubstract }>- 1</button>
      <button onClick={ handleReset }>Cero</button>
      <button onClick={ handleAddEvent }>Event</button> 
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
  value: 0,
}

export default CounterApp;
