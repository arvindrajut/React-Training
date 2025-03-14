import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount(count-1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Set to zero</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter