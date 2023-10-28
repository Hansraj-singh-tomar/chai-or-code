import {useState} from 'react'

// in that i don't need to create a state for multiplyByFive
//  as my state of value will change it will mount this whole function in with that my multipliedValue will also change

const DontNeedState = () => {
    const [value, setValue] = useState(1);

    const multipliedValue = value * 5;

    function MultiplyByFive() {
        setValue(value + 1);
    }
  return (
    <div>
          <h1>Main Value: {value}</h1>
          <button onClick={MultiplyByFive}>Click To Multiply by 5</button>
          <h1>Multiplied Value: {multipliedValue}</h1>
    </div>
  )
}

export default DontNeedState


// what is tree shaking
// how do you handle errors in react
// About tools used to log the tickets and track them
// how do you log the errors? and attach them into ticket?
// how do you debug the errors in production environment

// javascript Questions
// what does the !! operator
// what is event.target and event.currentTarget
// why does this code obj.someprop.x throw an error
// why are functions called first-class objects
// what are wrapper objects
// what is the implicite and explicite coercion
 