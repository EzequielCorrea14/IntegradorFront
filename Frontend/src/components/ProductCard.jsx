import { useContext, useState } from "react";

import { FaCartShopping} from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { PiEngineBold } from "react-icons/pi";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";
import ImageSliderProduct from './ImageSliderProduct'
import image1 from '../Pages/Home/Components/images/sport.jpg'

const ProductCard = ({ product, fetchProductsData }) => {
  const { addToCart } = useContext(CartContext)
 
  const mockImages = [ 
     product.image1,
     product.image2,
    product.image3,


  ];
  
  return (
    <div className="product-card">
      
        <>
          
          <article className="article-product-list">
            
            <section className="masVendido">
              
                <ImageSliderProduct images={mockImages}/>
            
              
                
                <div id="infoMoto">
                    <div id="infoIconos">
                        <ul id="iconList">
                            <li id="cc">
                            <PiEngineBold style={{fontSize:'30px' , color : 'white'}} />
                                <div id="info-card">
                                <p>{product.cc}</p>
                                <p>cc.</p>
                                </div>
                            </li>
                            <li id="tacometro">
                            <LiaTachometerAltSolid style={{fontSize:'30px' , color : 'white'}} />
                            <div id="info-vel">
                                <p> 0-100/ </p>
                                <p> {product.vel} </p>
                                <p>s</p>
                                </div>
                            </li>
                            <li id="consumo">
                            <BsFuelPump style={{fontSize:'30px' , color : 'white'}} />
                            <div id="info-km">
                                <p> 1L/</p>
                                <p>{product.km}</p>
                                <p>km</p>
                                </div>
                            </li>
                        </ul>                    
                    </div>
                    <div id="descripcion">
                      <div id="div-price-name">
                        <h1 id="name-card">{product.name}</h1>
                        <h2 id="price-card">${product.price}</h2>

                      </div>
                        <p id="p-description">{product.description}</p>
                        <p>color: {product.color}</p>
                        <p id="p-stock">Stock: {product.stock}</p>
                        
                    </div>
                                      
                </div>
            </section>
        </article>
          <div className="product-card__button-container">
            <button id="button-product" onClick={() => addToCart(product)}>
              {" "}
              <FaCartShopping />
              Agregar
            </button>
            
          </div>
        </>
      
    </div>
  );
};

export default ProductCard;

