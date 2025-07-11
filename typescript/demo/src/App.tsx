import "./App.css";
import ToDo from "./components/ToDo";
// import AdminInfo from "./components/AdminInfo";
import UserData from "./components/UserData";
// import UserInfo from "./components/UserInfo";
// import Button from './Button'

function App() {
  // const handleClick = () => {
  //     alert("Button Clicked")
  //   }
  return (
    <>
      {/* <Button lable="Click Me" handleclick={handleClick} disabled={false}/> */}
      <div className="flex flex-col items-center justify-center">
        {/* <h1>
          <UserInfo />
        </h1>
        <h2>
          <AdminInfo />
        </h2> */}
        <UserData />
        <ToDo />
      </div>
    </>
  );
}

export default App;
