import { useForm } from "react-hook-form";



const contact = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data,e) => {
        console.log(data);

        e.target.reset();
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Contacto</h1>
            <div id="containter-form" style={{width:'100%'}}>
              <div className="div-name">
                <label>Nombre</label>
              <input
              type="text" {...register('name', {
                required: true,
                minLength: 3,
                maxLength: 30,
                pattern: /^[A-Z][ A-Za-z 0-9.']{1,30}$/i,
              })}/>
              
              {errors.name?.type === 'required' && <p className="errors">El nombre es requerido.</p>}
              {errors.name?.type === 'minLength' && <p className="errors">El nombre debe tener al menos 3 caracteres.</p>}
              {errors.name?.type === 'maxLength' && <p className="errors">El nombre debe tener menos de 30 caracteres.</p>}
              {errors.name?.type === 'pattern' && <p className="errors">El nombre debe comenzar con mayúscula.</p>}
          
              <label >Apellido</label>
            <input
            type="text" {...register('lastName', {
              required: true,
              minLength: 3,
              maxLength: 30,
              pattern: /^[A-Z][ A-Za-z 0-9.']{1,30}$/i,
            })}/>
            
            {errors.lastName?.type === 'required' && <p className="errors">El apellido es requerido.</p>}
            {errors.lastName?.type === 'minLength' && <p className="errors">El apellido debe tener al menos 3 caracteres.</p>}
            {errors.lastName?.type === 'maxLength' && <p className="errors">El apellido debe tener menos de 30 caracteres.</p>}
            {errors.lastName?.type === 'pattern' && <p className="errors">El apellido debe comenzar con mayúscula.</p>}
        
            </div>
            <div className="div-mail">
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && < p className="errors">El formato del email es incorrecto</p>}
            </div>
            
            <div>
                <label className="div-affair">Asunto</label>
                <select {...register('affair')}>
                    <option value="compra">Compra</option>
                    <option value="venta">Venta</option>
                    <option value="Consulta">Consulta</option>
                </select>
            </div>
            <div className="div-phone">
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div>
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <div>
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

            </div>
              </div>
            <button className="button-register" type="submit" value="Enviar consulta"> Enviar consulta  </button>
        </form>
        
        
    </div>
}

export default contact;