import { useState } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'

// let's empower this functional component with some extra features! :)

// RULES OF HOOKS
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS (no generic js files, no class components)
// 2) USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT (before the return statement, outside of any loop/function)
// this is because we have at all times to preserve the ORDER of CALLING of our hooks

// state object example (only usable in a class component)
// {
//     isLoading: true,
//     isError: false
// }

const UseStateComponent = () => {
  // here!
  // let's create a state variable: we need useState()

  //   const stefano = useState()
  // stefano is an array of two elements
  // stefano[0]
  // stefano[1]

  const [isLoading, setIsLoading] = useState(true)
  // isLoading is the state variable
  // setIsLoading is a function capable of changing the value of isLoading (like setState, but just for isLoading)
  const [name, setName] = useState('Stefano')
  const [isError] = useState(false)

  // this is not going to work! use hooks OUTSIDE of everything else!
  //   if(true) {
  //       const [isError, setIsError] = useState(false)
  //   }

  return (
    <div>
      <h1>useState example</h1>
      <Button onClick={() => setIsLoading(!isLoading)}>TOGGLE SPINNER</Button>
      {isLoading && <Spinner animation="border" variant="danger" />}
      <p onClick={() => setName('Ashley')}>
        my name is {name}, click me to change!
      </p>
      {isError && <Alert variant="danger">ISERROR IS TRUE!</Alert>}
    </div>
  )
}

export default UseStateComponent
