import {useState, useTransition} from 'react'
import Home from './components/Home'
import Posts from './components/Posts'
import Contact from './components/Contact'

const App = () => {

  const [actuiveTap, setActiveTap] = useState('home')
  const [ispending, startTransition] = useTransition()

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTap(tab)
    })
  }
  const renderPage = () => {
    switch(actuiveTap) {
      case 'home':
        return <Home/>
      case 'post':
        return <Posts/>
      case 'contact':
        return <Contact/>
      default:
        return <Home/>
    }
  }
  return (
    <div>
      <button onClick={() => handleTabChange('home')}>Home</button>
      <button onClick={() => handleTabChange('post')}>Posts</button>
      <button onClick={() => handleTabChange('contact')}>Contact</button>
      {ispending && <p>Loading...</p>}
      {renderPage()}
    </div>
  )
}

export default App