import "./Banner.css"
import { useState } from "react";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
const Banner = () => {  
  const [boton, setBoton]=useState("Presiona Aquí");
  return (
  <header>    
    {/* "<! – preparo desarrollo para lo que sigue */}
    <div className="BannerContainer">     
      <div className="Banner">             
            <h1>Comprá tu pelicula!!!</h1>
            <p> Aplicacion ecommerce de peliculas en VHS.</p>
            <p>  Se mostrará varios Card con foto, descripcion y precio, y estilos en lo que es la interface.</p>
            <p> El banner vendría ser el contenedor de todos los Card.</p>
            <p> El navbar está constituido por el Logo, botón Search, textbox search, menues con links, botón hamburguesa para dichos links</p>
            <p> El Navbar en modo mobil se esconderá y solo mostrará el logo.</p>
            <p> En el Banner podemos encontrar algunos de los pedidos para la primer entrega</p>
            <p> Text a mostrar con ItemListConteiner</p>
            <p> El carrito en la NAvBar con un número hardcodeado</p>
      
      <div>
          <ItemListContainer greeting={<p>Aca podes comprar peliculas</p>}/>
      </div>
          <div>
              <button           
              onClick={()=>setBoton("GRACIAS!")}>{boton}
              </button>
          </div>
      </div>
    </div>
  </header>
  )
}
export default Banner
