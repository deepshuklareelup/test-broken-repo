import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>⚡ Counter App</h1>
        <p>A simple counter built with React</p>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}
