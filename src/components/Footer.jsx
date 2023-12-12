import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <>
    <article className="artFooter">
            <div className="divVentas">
                <h2 className="h2footer">Ventas</h2>
                <ul className="ulfooter">
                    <li className="tel">
                        <FiPhone/>
                        <p>Tel: +54 112222222</p>
                    </li>
                    <li className="email">
                        <IoIosMail/>
                        <p>Email: Ventas@rcmotors.com</p>
                    </li>
                </ul>
            </div>
            <div>
                
                    <ul className='ul-footer'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/registerProduct'}>Register Products</Link></li>
                        <li><Link to={'/models'}>Models</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>

                    </ul>
                
            </div>
            <div>
                <h2 className="h2-footer">Nos encontramos en:</h2>
                <p> Calle 1354,Caba,Argentina</p>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13133.337016595504!2d-58.42875065!3d-34.620992550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1693100472550!5m2!1ses-419!2sar" width="300" height="200" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </article>
    </>
  )
}

export default Footer