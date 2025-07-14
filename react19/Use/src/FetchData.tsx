import { use } from "react";

    const fetchdata = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        return res.json()
    }
const FetchData = () => {

    // interface Todo {
    //     title : string
    // }

    // const [Todos, setTodos] = useState<Todo[]>();
    // const [loading, setLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     const fetchTodos = async () => {
    //       setLoading(true);
    //       const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //       const data = await res.json();
    //       setTodos(data);
    //       setLoading(false);
    //     }
    //     fetchTodos();
    //   }, []);


    const data = use(fetchdata())
    
  return (
    <div>FetchData
      {/* {loading && <p>Loading...</p>} */}
      {data.title}
    </div>
  )
}

export default FetchData