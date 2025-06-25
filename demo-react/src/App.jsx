
// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import JSXRules from './components/JSXRules'
import MainContent from './components/MainContent'
import UserList from './components/UserList'
import UserStatus from './components/UserStatus'
import Weather from './components/Weather'
import WelcomeMsg from './components/WelcomeMsg'
import Todo from './components/Todo'

function App() {
 
  // const [friends, setFriends] = useState(['manoj','manu'])

  return (

    <Todo/>

    // <div>
    //   {friends.map((friend) => (
    //     <div key={Math.random()}>{friend}</div>
    //   ))}
    //   <button onClick={() => setFriends([...friends, 'new friend'])}>Add Friend</button>
    //   <button onClick={() => setFriends(friends.filter((friend) => friend !== 'new friend'))}>Remove Friend</button>
    //   <button onClick={() => setFriends(friends.map((friend) => friend === 'manoj' ? 'manu' : friend))}>Change Friend</button>
    // </div>


    // <>
    // <WelcomeMsg/>
    // <Header/>
    // <MainContent/>
    // <Footer/>
    // </>
    // <JSXRules/>
    // <main>
    //   {list.map((listItem) => (
    //     <li key={Math.random()}>{listItem}</li>
    //   ))}
    // </main>
    // <UserList   name="John Doe" age={30} email="M2K6y@example.com"/>
    // <UserStatus loggendIn={true} isAdmin={true} />
    // <Weather  isSnowing={true} />

  // <div>
  //   {count}<br></br>
  //   <button onClick={() => setCount(count + 1)} style={{marginRight: '10px', marginLeft: '10px', marginBottom: '10px'}}>Increment</button>
  //   <button onClick={() => setCount(count - 1)}>Decrement</button>
  // </div>

  )
}

export default App
