import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// useEffect() brings lifecycle methods into functional components!

// RULES OF HOOKS
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS (no generic js files, no class components)
// 2) USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT (before the return statement, outside of any loop/function)
// this is because we have at all times to preserve the ORDER of CALLING of our hooks

const UseEffectComponent = () => {
  // useEffect can mimic the functionalities of componentDidMount and componentDidUpdate

  useEffect(
    () => {
      // here goes your logic! maybe a fetch
    },
    [
      // this is called the DEPENDENCY array
      // if you put a variable or more here, the effect will be
      // invoked AGAIN every time that variable changes!
    ]
  )

  // componentDidMount replacement
  useEffect(() => {
    console.log('trying to replicate componentDidMount in a function :O')
  }, [])
  // because of our EMPTY array of dependencies, we're listening to NOTHING
  // in order to repeat the effect (the callback in the first argument)

  // componentDidUpdate replacement
  // if(prevProps.movieTitle !== this.props.movieTitle)
  //   useEffect(() => {
  //       // fetch code
  //   }, [movieTitle])

  const [counter, setCounter] = useState(0)

  //   {
  //       counter: 0
  //   }

  useEffect(() => {
    console.log('counter increased!')
  }, [counter])
  // exactly as, in a class component:
  //   componentDidUpdate(prevProps) {
  //       if(prevProps.counter !== this.props.counter) {
  //         console.log('counter increased!')
  //       }
  //   }

  return (
    <div>
      <h2>useEffect example!</h2>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
      <p>{counter}</p>
    </div>
  )
}

export default UseEffectComponent
