import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {

    const[state, dispatch] = useReducer(counterReducer, initialState);
    const [input, setInput] = useState(0);

  return (
    <div>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
        <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        <div>{state.count}</div>
        <div>
            <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch({type: 'ADD', payload: Number(input)}) }>ADD</button>
            <button onClick={() => dispatch({type: 'SUBTRACT', payload: Number(input)})} >SUB</button>
        </div>
    </div>
  )
}

export default Counter;