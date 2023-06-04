import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <Main />
        <Footer />
      </div>
      
    </>
  )
}

export default App
