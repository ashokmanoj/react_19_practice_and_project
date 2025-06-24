
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import JSXRules from './components/JSXRules'
import MainContent from './components/MainContent'
import UserList from './components/UserList'
import WelcomeMsg from './components/WelcomeMsg'

function App() {
 
  // const list = [1,2,3,4,5]

  return (
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
    <UserList   name="John Doe" age={30} email="M2K6y@example.com"/>
  )
}

export default App
