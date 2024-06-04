import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Blog from './Pages/Blog'
import Notfound from './Pages/Notfound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
