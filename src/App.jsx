
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import Footer from './components/Footer/Footer'




function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App

