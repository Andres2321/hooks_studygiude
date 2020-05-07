import React, { useState } from 'react'

export default function Hooks() {
  const [count, setCount] = useState(10);
  const [{ count2, count3 }, setCounts] = useState({ count2: 10, count3: 30 });
  const [{ count4, count5 }, setMultipleCounts] = useState({
    count4: 5,
    count5: 6,
  });
  const [{ count6, count7 }, setNewCounts] = useState({ count6: 1, count7: 3 });
  return (
    <div>
      <h1>Basic Hooks Tutorial and Examples</h1>

      <hr />

      <h1>Basic counter using hooks</h1>
      <p>Two different methods used when incrementing and decrementing used</p>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 2)}>Add</button>
      <button onClick={() => setCount((currentCount) => currentCount - 2)}>
        Subtract
      </button>

      <br />
      <br />

      <h1>What if you have to keep track of two counters?</h1>
      <div>Count 2: {count2}</div>
      <div>Count 3: {count3}</div>
      <button onClick={() => setCounts({ count2: count2 + 1 })}>Add</button>
      <p>
        If you have multiple states, and only change one like the example above,
        then every other state will be overwritten. the 30 counter will
        dissappear once you click add meant for counter of 10.
        <strong>
          To fix this, you must use ...state at the beginning of the setCount
          function. Must be first element in setCount.
        </strong>
      </p>

      <br />

      <div>Count 4: {count4}</div>
      <div>Count 5: {count5}</div>
      <button
        onClick={() =>
          setMultipleCounts((state) => ({ ...state, count4: count4 + 1 }))
        }
      >
        Add
      </button>
      <p>Now you can see both counters and manipulate count 4: 5</p>

      <h1>Lets try to affect 2 counts with one click</h1>
      <div>count 6: {count6}</div>
      <div>count 7: {count7}</div>
      <button
        onClick={() =>
          setNewCounts((state) => ({
            ...state,
            count6: count6 + 1,
            count7: count7 + 1,
          }))
        }
      >
        Add
      </button>
      <p>
        Simply use the spread operator as the first element in the setState
        function to essentially load original values. Then, proceed to
        manipulate any values
      </p>
    </div>
  )
}
