useTransition (React Hook)
📖 Overview

useTransition is a hook introduced in React 18 that helps manage non-urgent updates.
It keeps your app snappy and responsive by letting React prioritize urgent updates (like typing or clicks) while deferring expensive operations (like filtering a large list or rendering heavy UI) in the background.

🚀 Installation

useTransition is built into React 18+. Make sure you’re on React 18 or later:

npm install react react-dom

🛠️ Usage Example
import { useState, useTransition } from "react";

function Search() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value); // urgent update

    // non-urgent update wrapped in transition
    startTransition(() => {
      const filtered = expensiveFilter(value);
      setResults(filtered);
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function expensiveFilter(value) {
  // simulate expensive computation
  const items = ["apple", "banana", "orange", "grape", "pear"];
  return items.filter((item) => item.includes(value.toLowerCase()));
}

📦 API Reference
const [isPending, startTransition] = useTransition();

isPending → boolean

true while the transition is running.

Use this to show loading indicators or disable UI controls.

startTransition(callback) → void

Marks the updates inside callback as non-urgent.

Urgent updates (like text input) are applied first, then background updates run.

✅ When to Use

Filtering/searching large lists

Complex UI updates triggered by input

Rendering heavy components that don’t need to block typing or clicks

❌ Avoid Using For

Direct user inputs (e.g., typing text)

Critical updates (form submission, authentication, navigation)

🔍 Example: Before vs After
❌ Without useTransition

Typing feels laggy if filtering is slow.

✅ With useTransition

Typing stays smooth and responsive, while results update in the background.

📚 Resources

React Docs – useTransition