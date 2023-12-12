import React, { useContext, useEffect, useState } from 'react'
import {  FaTrash } from "react-icons/fa";
import { FaXmark} from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import { CgRemove,CgAdd } from "react-icons/cg";
import { FaRegTrashCan } from "react-icons/fa6";


const CartButton = () => {
    const { cart, setCart, clearCart, removeItem, totalItems, totalCart,addItem } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false)
    const [total, setTotal] = useState(0);
    const toggleCart=()=>{
        setIsOpen(prevState => !prevState)
    } 
    useEffect(() => {
        const newTotal = cart.reduce((acc, productCard) =>{
            return acc + productCard.price
        },0)
        setTotal(newTotal);
  }, [cart]);

  return (
    <>
        <div className="cart-button-container">
        <button className='cart-button' onClick={toggleCart}> 
        <IoCartOutline style={{color:'white'}} />
        </button>
        {isOpen && (
          <div className='cart-overlay'>
            <div className='cart'>
            <button className="close-button" onClick={toggleCart}>
              <FaXmark />
            </button>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <h4 style={{marginTop:'38px', marginBottom:'0px'}}>{item.name}</h4>
                    <div className='cart-product'>

                    <div className='cart-quantity'>

                    <CgRemove style={{color:'white',cursor: 'pointer', position:'relative', top: '50%'}} onClick={() => removeItem(item.id)} />
                    <p>{item.quantity}</p>
                    <CgAdd style={{color:'white',cursor: 'pointer', position:'relative', top: '50%'}} onClick={() => addItem(item.id)} />
                    </div>
                    <p> $ {item.price}</p>
                    
                    </div>
                    
                  </div>
                ))}
                <div className='cart-total-Products'>
                <p>_______________________________________</p>
                <p className="cart-title">Total Productos: {totalItems()}</p>
                <p className="cart-title">Total: $ {totalCart()}</p>
                
                  <FaRegTrashCan className="clear-button" style={{color:'white',cursor: 'pointer', position:'relative', top: '50%'}}  onClick={() => clearCart()}/>
                 
                
                </div>

                <button className='button-buy'>Comprar</button>
              </>
            ) : (
              <p>No hay productos en el carrito</p>
              )}
          </div>
        </div>
        )}
      </div>
        
        </>)
        
}


export default CartButton