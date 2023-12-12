import React from 'react'
import about from './components/images/nosotros.png'
import about1 from './components/images/nosotros1.png'
import about2 from './components/images/nosotros2.png'



const About = () => {
  return (
    <div>
        
      <article className="articleNosotros">
            <h1 className="h1Nosotros">Historia</h1>
            <div className="divNosotros1">
                <p className="pNosotros">Como muchas empresas de éxito, la Harley-Davidson Motor Company nació con poco más que un sueño y mucho trabajo duro. En 1903 cuatro jóvenes emprendedores ambiciosos construyeron la primera motocicleta Harley-Davidson dentro de un cobertizo de madera en Milwaukee, Wisconsin.

                    Nuestros fundadores fueron los hermanos Walter, William y Arthur Davidson y Bill Harley.
                    
                    Hoy en día Harley-Davidson emplea a más de 9.700 personas en todo el mundo.
                    
                    Las oficinas centrales de la Motor Company siguen situadas cerca del famoso cobertizo, justo al oeste del centro de Milwaukee.
                    
                    Hoy en día Harley-Davidson Inc. fábrica y vende más de 330.000 motocicletas en todo el mundo y tiene el compromiso público de crecer cada año.</p>
                <img className="imgNosotros" src={about} alt="" />
            </div>
            <div className="divNosotros2">
                <p className="pNosotros">En el año 2.005 Harley-Davidson celebró el hito de haber obtenido 20 años consecutivos de récord en facturación, beneficios y ventas al público.

                    En el año 2007, Harley-Davidson Argentina introdujo la marca Buell en el país.
                    
                    Buell completa nuestra familia de productos y ofrece algo para todo el mundo. Incluso a pesar de que Harley-Davidson® es una marca fiel a su tradición, disponemos de centros de desarrollo, distribución y fábricas dotadas de la tecnología más avanzada.
                    
                    Nuestras motos se fabrican en tres puntos geográficos de Estados Unidos: en Wisconsin, Pennsylvania y Kansas City, Missouri.
                    
                    El centro de desarrollo y el centro de distribución ayudan a hacer llegar las motocicletas y la gama de accesorios, recambios y MotorClothes® a nuestro concesionario.</p>
                <img className="imgNosotros" src={about1} alt="" />
            </div>
            <div className="divNosotros1">
                <p className="pNosotros">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In expedita libero quidem blanditiis porro. Quis, illo nisi. Soluta laboriosam, aut sed iusto, dolorem neque veritatis, omnis alias culpa reprehenderit ab voluptatibus eligendi voluptates rerum molestias in hic tempore quia! Minus pariatur atque veritatis, voluptatem vero soluta doloremque adipisci illo inventore fugiat quidem mollitia assumenda modi quod explicabo, repellat quaerat ut voluptatum ullam dicta eum harum iusto. Eos eum velit dicta esse. Harum iste porro tenetur minima tempora. Odit odio ad doloribus, aperiam recusandae fugit aut, vel vitae perspiciatis exercitationem itaque inventore dignissimos ipsum dolorum ipsa. Odio consequuntur blanditiis ullam tempore?</p>
                <img className="imgNosotros" src={about2} alt="" />
            </div>
        </article>
        
       
    </div>
  )
}

export default About