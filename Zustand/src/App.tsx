import { useCounterStore } from "./store";
import Zus from "./Zus";

const App = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Zus  />
    </div>
  );
};

export default App;