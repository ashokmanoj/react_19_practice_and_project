import React from "react";
import Left from "./components/Left";
import Right from "./components/Rght";
import SplitScreen from "./components/SplitScreen";

const App: React.FC = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <Left />
      <Right />
    </SplitScreen>
  );
};

export default App;