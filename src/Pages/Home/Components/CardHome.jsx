import React from 'react'
import { PiEngineBold } from "react-icons/pi";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";
import ImageSliderHome from './ImageSliderHome';
import image1 from './images/sport.jpg'
import image2 from './images/sport1.jpg'
import image3 from './images/sport2.jpg'



const CardHome = () => {

    const mockImages = [
		image1,
		image2,
		image3,
	];
    
    



  return (
    <div>
        <article className="artMasVendido">
            <h1 className="h1mas">Mas Vendida</h1>
            <section className="masVendido">
                <ImageSliderHome images={mockImages}/>
                <div id="infoMoto">
                    <div id="infoIconos">
                        <ul id="ListaIconos">
                            <li id="cc">
                                <PiEngineBold style={{fontSize:'25px'}} />
                                <p>800cc.</p>
                            </li>
                            <li id="tacometro">

                            <LiaTachometerAltSolid style={{fontSize:'25px'}} />
                                <p> 0-100 9s</p>
                            </li>
                            <li id="consumo">

                            <BsFuelPump style={{fontSize:'20px'}} />
                                <p> 1/10km</p>
                            </li>
                        </ul>                    
                    </div>
                    <div id="descripcion">
                        <div className='div-price-name'>
                        <h1>Sportster™ S</h1>
                        <h2 id='h2-price'>$2.500.000</h2>
                        </div>
                        <p>
                            La Sportster™ S es el primer capítulo de un libro completamente nuevo de la saga Sportster. Un legado que nació en 1957 superando a la competencia y que ahora toma una nueva forma para superar una vez más los estándares actuales.
                        </p>
                    </div>
                    <button className="button-home" style={{}} href="./Models"><span>Conoce mas</span></button>

                </div>
            </section>
        </article>
    </div>
  )
}

export default CardHome