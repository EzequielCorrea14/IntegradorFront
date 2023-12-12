import './production/styles.css'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import About from './Pages/About/About'
import Contacts from './Pages/Contact/Contact'
import Page404 from './Pages/Page404/Page404'
import Models from './Pages/Models/Models'
import NavBar from './components/Navbar'
import Background from './components/Background'
import Footer from './components/Footer'
import RegisterProduct from './Pages/registerProduct/registerProduct'
import { CartProvider } from './context/CartContext'

import CartButton from './components/CartButton'




function App() {



  
  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/models" element={<Models/>} />
      <Route path="/about" element={<About/>} />
      {/* {userData && userData.admin &&<Route path="/Alta" element={<RegisterProduct />} />} */}
      <Route path="/registerProduct" element={<RegisterProduct/>} />

      <Route path="/contact" element={<Contacts/>} />
      <Route path="*" element={<Page404/>} />
      
    </Routes>
      <Footer/>
      <Background/>
    
    

    
    </>
  )
}

export default App
