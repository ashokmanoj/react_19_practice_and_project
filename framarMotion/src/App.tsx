// import React from 'react'
// import { motion } from "motion/react";
// import ScrollTriggered from "./components/motion";
import SharedLayoutAnimation from "./components/SharedLayoutAnimation";
// const box = {
//   width: 100,
//   height: 100,
//   background: "red",
// };
const App = () => {
  return (
    <>
      {/* <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <ScrollTriggered /> */}
      <SharedLayoutAnimation />
    </>
  );
};

export default App;
