import { useState } from "react";

// BUG: Missing closing `}` for the Counter function body.
// The agent should detect: SyntaxError: Unexpected end of input
// and fix it by adding the missing closing brace.

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Counter</h2>
      <div className="count-display">{count}</div>
      <div className="counter-buttons">
        <button className="btn btn-minus" onClick={() => setCount((c) => c - 1)}>
          −
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn btn-plus" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </div>
  );
// ← intentional bug: closing `}` for Counter function is missing below
