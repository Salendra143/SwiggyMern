import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <div className=' md:pt-24 pt-28'>
      <Outlet/>
    </div>
      <Footer/>
  </div>
  )
}

export default App
