import PropTypes from 'prop-types';


const CounterApp = ({ value }) =>{

  // handleAdd
  const handleAdd = () => {
    return console.log('click')
  }
  // handleAdd event (e). La e es un objeto con la información del evento
  // de react. Tiene un monton de propiedades.
  const handleAddEvent = (e) => {
    return console.log(e)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      { /* evento onClick*/}
      <button onClick={ handleAdd }>+ 1</button> 
      <button onClick={ handleAddEvent }>Event</button> 
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp;
