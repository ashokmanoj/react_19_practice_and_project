import Left from "./components/left"
import Right from "./components/Rght"
import SplitScreen from "./components/splitscreen"


const App = () => {
  return (
   <SplitScreen leftWeight={50} rightWeight={80}>
    <Right />
    <Left />
   </SplitScreen>
  )
}

export default App