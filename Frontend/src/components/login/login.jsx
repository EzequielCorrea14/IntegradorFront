
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaUser } from "react-icons/fa";


const Login = ()=>{

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleCart=()=>{
        setIsOpen(prevState => !prevState)
    } 
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    


    const submitHandler = (event) => {
           
         };
    return(
        <>

                            <div className="cart-button-container">
                            <button className='cart-button' onClick={toggleCart}> 
                            <FaUser  style={{color:'white', marginRight:"-350px"}} />
                            </button>
                        {isOpen && (
                              <div className='cart-overlay'>
                                <div className='cart'>
                                    
                                        <h2>Ingresar</h2>
                                        <p>Bienvenido a RCMotors ingrese su usuario y contraseña</p>
                                        <input type="mail" id="email" className="form__input" required minLength="3"  placeholder="EMAIL" onChange={(event)=>{setEmail(event.target.value)}}/>
                                        < p id="Email" className="animated"></p>
                                        <input type="password" id="Pass" className="form__input" required minLength="3"  placeholder="CONTRASEÑA" onChange={(event)=>{setPass(event.target.value)}}/>
                                        < p id="Password" className="animated"></p>
                                        <div>
                                        <Link to='/'>Cambiar contraseña</Link>
                                        <br />
                                        <Link to='/CrearCuenta'>Crear un usuario</Link>
                                        </div>
                                        <button onSubmit={submitHandler}>Ingresar</button>

                                    
                              </div>
                            </div>
                            )}
          </div>
        
        </>)
        
}

export default Login

//no logre hacer el login