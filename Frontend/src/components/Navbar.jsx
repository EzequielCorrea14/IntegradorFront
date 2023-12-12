import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
import Home from '../pages/home/home'
import '../production/styles.css'
import { CartProvider } from '../context/CartContext'
import styled from  'styled-components'
import CartButton from './CartButton'
import {useState} from 'react'
import BurguerButton from './BurguerButton'



const NavBar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  
  return (
    < >
    <NavContainer>
      <CartProvider> 
        <a  href={Home}>
            <img className='navbarImage' src={logo} alt="logo"/>   
        </a>
        <h2 className='h2-navbar'>RC MOTORS</h2>
        
        <ul className={`links ${clicked ? 'active' : ''}`}>
          
            <li><NavLink className='activate' to={'/'}>Home</NavLink></li>
            {/* {userData && userData.admin &&<NavLink path="/Alta" element={<Alta />} />} */}
            <li><NavLink className='activate' to={'/alta'}>Alta</NavLink></li>
            <li><NavLink className='activate' to={'/registerProduct'}>Register Products</NavLink></li>
            <li><NavLink className='activate' to={'/models'}>Models</NavLink></li>
            <li><NavLink className='activate' to={'/about'}>About</NavLink></li>
            <li><NavLink className='activate' to={'/contact'}>Contact</NavLink></li>
      
        </ul>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        <CartButton/>
        </CartProvider>
        </NavContainer>
        

        
        
    
    </>
  )
}

export default NavBar
const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 79%;
    left: 41px;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`