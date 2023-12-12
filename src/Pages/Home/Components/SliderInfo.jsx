import React from 'react'

import { IoTimeOutline, IoCard, IoLocationOutline } from "react-icons/io5";

const SliderInfo = () => {
  return (
    
    <div className="contenedor">
            <ul className="slider">
                <li id="slider1">
                    
                <IoCard style={{fontSize:'30px'}}/>Aceptamos todos los medios de pago</li>
                <li id="slider2">
                    
                <IoTimeOutline style={{fontSize:'30px'}}/>Lu. a Vie. 9hs a 20hs</li>
                <li id="slider3">
                    
                <IoLocationOutline style={{fontSize:'30px'}}/>Calle 1354,Caba,Argentina</li>
            </ul>
            <ul className="menuSlider">
                <li>
                    <a href="#slider1"></a>
                </li>
                <li>
                    <a href="#slider2"></a>
                </li>
                <li>
                    <a href="#slider3"></a>
                </li>
            </ul>
        </div>
  )
}

export default SliderInfo