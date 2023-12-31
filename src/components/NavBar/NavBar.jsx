// import "./App.css";
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import "./NavBar.css";  
import { useState } from 'react';
import Carrito from "../Carrito/Carrito";
// captura el state para, en un futuro, hacer que las opciones de menú estén dentro del botón
const NavBar = () =>{
  const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }
  return (    
<header className="NavBarContainer">  
  <nav className="NavBar" >    
  <nav className="NavBarLogo"/>
  <NavBarLogo/>  
  {/*  <--! buscador de videos--!> */ }
  <div> 
                <div>
                <input className="NavBar-text" type="search" placeholder="Busca tu pelicula aquí"  aria-label="Search"/>   
                            
                <button type="button" className="NavBar-button" width="16px" height="16px" >Buscar</button>
                </div>
  </div>  
       {/* botón para el menú, que debería contenet los li  */}  
  <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
  <button 
            onClick={ toggleMenu }
         className="Cabecera-button">
    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </button>
            <ul className="NavBar-ul">
                <li className="NavBar-li"><a href="#" >Inicio</a></li>
                <li className="NavBar-li"><a href="#" >Genero</a></li>
                <li className="NavBar-li"><a href="#" >Contactanos</a></li>
                <li className="NavBar-li"><a href="#" >Estrenos</a></li>
                <li className="NavBar-li"><a href="#" >Ayuda</a></li>
            </ul>
  </nav>
  <button className="NavBar-button">      
       <svg className="NavBar-svg" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor"  viewBox="0 0 16 16">
       <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
       </svg>
  </button>
      <h2 className="Carrito"> <a href="#"></a> <Carrito/> </h2>   
  </nav>  
</header>
  );
};
export default NavBar;

