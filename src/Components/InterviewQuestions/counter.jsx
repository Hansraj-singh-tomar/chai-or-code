import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(15);

  function Increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // yha mujhe 19 nhi mil rha tha or value increase hote hi ja rhi thi 

    setCount((preCount) => preCount + 1)
    setCount((preCount) => preCount + 1)
    setCount((preCount) => preCount + 1)
    setCount((preCount) => preCount + 1)
    // ouput - 19 // increment ke button par ek baar click karne par mujhe direct 19 milega
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default Counter