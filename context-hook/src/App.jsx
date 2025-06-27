import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);

  return (
    <>
      <h1>This custom hook</h1>
      {
        data && data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))
      }
    </>
  )
}

export default App
