import { useState } from "react";

type ToDoProps = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  desscription: string;
};
const ToDo = () => {
  const [data, setData] = useState<ToDoProps[]>([
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
      userId: 1,
      desscription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
      userId: 1,
      desscription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]);
  return (
    <div>
      ToDo
      <ul>
        {data.map((todo) => (
          <div key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.userId}</li>
            <li>{todo.desscription}</li>
            <li>{todo.completed}</li>

            <button
              onClick={() =>
                setData(
                  data.filter((todo) => console.log(todo.completed === false))
                )
              }
            >
              Update
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
