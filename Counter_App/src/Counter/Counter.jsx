import React, {useState} from 'react'
import './Counter.css'
function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='counter-wrapper'>
      <div className="counter">
        <span className='count'>{count}</span>
        <div className="controlls">
        <button className='btn btn-increment' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='btn btn-decrement'onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter