import { useForm } from "react-hook-form";
import { useState } from "react";
import * as React from "react"
import BasicModal from "../../../components/BasicModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productForm = () => {

    const { register,setError, formState: { errors }, handleSubmit } = useForm({
        
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const onSubmit = async (data,e) => {
      e.target.reset();
      try {
        const response = await fetch(
          "https://653ad68f2e42fd0d54d47f1b.mockapi.io/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
          );
          console.log(data)
  
        if (!response.ok) {
          throw new Error('Error al agregar un producto.')
          toast.error('Error al agregar un producto.')
        }else{toast.success('Producto Agregado con éxito.')}
        // try {
        //   await fetchData()
        //   toast.success('Producto Agregado con éxito.')
        // } catch (error) {
          
        // }
        // toast.success('Producto Agregado con éxito.')
      } catch (error) {
        toast.error('Error al agregar un producto.')
        
      }
    }



    

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Alta de Modelo</h1>
        <label for="">Nombre Modelo:</label>
        <input
            type="text" {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 30,
              pattern: /^[A-Z][ A-Za-z 0-9.']{1,30}$/i,
            })}/>
            
            {errors?.name?.type === 'required' && <p className="errors">El nombre es requerido.</p>}
            {errors?.name?.type === 'minLength' && <p className="errors">El nombre debe tener al menos 3 caracteres.</p>}
            {errors?.name?.type === 'maxLength' && <p className="errors">El nombre debe tener menos de 30 caracteres.</p>}
            {errors?.name?.type === 'pattern' && <p className="errors">El nombre debe comenzar con mayúscula.</p>}
        
        <label for="">Precio:</label>
        <input type="number" {...register('price', {
              required: true,
              minLength: 1,
              maxLength: 30,
              pattern: /^(\d*([.](?=\d{3}))?\d+)+((?!\2)[.]\d\d)?$/gm,
            })}/>
            {errors.price?.type === 'required' && <p className="errors">El precio es requerido.</p>}
            {errors.price?.type === 'minLength' && <p className="errors">El precio debe tener al menos 1 caracteres.</p>}
            {errors.price?.type === 'maxLength' && <p className="errors">El precio debe tener menos de 30 caracteres.</p>}
            {errors.price?.type === 'pattern' && <p className="errors">El precio debe ser un número y no admite comas.</p>}
        <h2 className="h2-info">Info</h2>
        <div className="div-info-bike">
            <div className="div-info">
                <label for="">Cilindrada:</label>
                    <div className="div-character">
                        <input
                        type="number" {...register('cc', {
                          required: true,
                          minLength: 1,
                          maxLength: 4,
                          pattern: /^[0-9]{1,4}$/,
                        })} />
                        <p>CC.</p>
                        </div>
                    </div>
                    
                    <div className="div-info" >
                            <label for="">Aceleración:</label>
                            <div >
                        <div className="div-vel">
                                <p>0-100/</p>
                                <input type="number" {...register('vel', {
                                  required: true,
                                  minLength: 1,
                                  maxLength: 2,
                                  pattern: /^[0-9]{1,2}$/,
                                })}/>
                                <p>s</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-info">
                            <label for="">Consumo:</label>
                            <div >
                        <div className="div-km" >
                                <p>1L/</p>
                                <input type="number" {...register('km', {
                                  required: true,
                                  minLength: 1,
                                  maxLength: 2,
                                  pattern: /^[0-9]{1,2}$/,
                                })}/>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                </div>
                {errors.cc?.type === 'required' && <p className="errors">La cilindrada es requerida.</p>}
                {errors.cc?.type === 'minLength' && <p className="errors">La cilindrada debe tener al menos 1 caracteres.</p>}
                {errors.cc?.type === 'maxLength' && <p className="errors">La cilindrada debe tener menos de 4 caracteres.</p>}
                {errors.cc?.type === 'pattern' && <p className="errors">La cilindrada debe ser un número y no superior a 9999.</p>}
                {errors.vel?.type === 'required' && <p className="errors">La aceleración es requerida.</p>}
                {errors.vel?.type === 'minLength' && <p className="errors">La aceleración debe tener al menos 1 caracteres.</p>}
                {errors.vel?.type === 'maxLength' && <p className="errors">La aceleración debe tener menos de 2 caracteres.</p>}
                {errors.vel?.type === 'pattern' && <p className="errors">La aceleración debe ser un número y no superior a 99.</p>}
                {errors.km?.type === 'required' && <p className="errors">El consumo es requerido.</p>}
                {errors.km?.type === 'minLength' && <p className="errors">El consumo debe tener al menos 1 caracteres.</p>}
                {errors.km?.type === 'maxLength' && <p className="errors">El consumo debe tener menos de 2 caracteres.</p>}
                {errors.km?.type === 'pattern' && <p className="errors">El consumo debe ser un número y no superior a 99.</p>}
                <label for="">Color:</label>
            <div className="div-colors">
            <input 
                type="text" {...register('color', {
                  required: true,
                                  pattern: /^[ A-Za-z 0-9.']{1,30}$/,
                })}/>
                
               
                
            </div>
            {errors.color?.type === 'required' && <p className="errors">El color es requerido.</p>}
            {errors.color?.type === 'pattern' && <p className="errors">El color debe ser un texto</p>}
            
                <label for="">Fotos</label>
                
                <input 
                type="text" {...register('image1', {
                  required: true,
                  
                  pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/ig,
                })}/>
                <input type="text" {...register('image2', {
                  required: true,
                  
                  pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/ig,
                })}/>
                <input type="text" {...register('image3', {
                  required: true,
                  
                  pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/ig,
                })}/>
                {errors.image1?.type === 'required' && <p className="errors">La imagen es requerida.</p>}
                {errors.image1?.type === 'pattern' && <p className="errors">La imagen debe ser un link.</p>}
                {errors.image2?.type === 'required' && <p className="errors">La imagen es requerida.</p>}
                {errors.image2?.type === 'pattern' && <p className="errors">La imagen debe ser un link.</p>}
                {errors.image3?.type === 'required' && <p className="errors">La imagen es requerida.</p>}
                {errors.image3?.type === 'pattern' && <p className="errors">La imagen debe ser un link.</p>}
            
            <label for="">Descripción:</label>
            <textarea type="text" {...register('description', {
              required: true,
              minLength: 1,
              maxLength: 350,
              pattern: /^[a-zA-Z0-9.,:;()¿?¡! ]{1,350}$/,
            })}></textarea>
            {errors.description?.type === 'required' && <p className="errors">La descripción es requerida.</p>}
            {errors.description?.type === 'minLength' && <p className="errors">La descripción debe tener al menos 1 caracteres.</p>}
            {errors.description?.type === 'maxLength' && <p className="errors">La descripción debe tener menos de 350 caracteres.</p>}
            {errors.description?.type === 'pattern' && <p className="errors">La descripción debe ser un texto.</p>}
            <label For="">Stock:</label>
            <input type="number"{...register('stock', {
              required: true,
              minLength: 1,
              maxLength: 5,
              pattern: /^[0-9]{1,5}$/,
            })}/>
            {errors.stock?.type === 'required' && <p className="errors">El stock es requerido.</p>}
            {errors.stock?.type === 'minLength' && <p className="errors">El stock debe tener al menos 1 caracteres.</p>}
            {errors.stock?.type === 'maxLength' && <p className="errors">El stock debe tener menos de 5 caracteres.</p>}
            {errors.stock?.type === 'pattern' && <p className="errors">El stock debe ser un número y no superior a 99999.</p>}
           
      <button className="button-register" >Agregar Producto</button>
        {/* <button onClick={ () => setIsModalOpen(true)}>Abrir modal</button> */}
    </form>
    <BasicModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
}

export default productForm;