import React from 'react'
import './styles/NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="header--logo">
                    <a className="header--logo__logo" href="/"></a>
                    <a className="header--logo__letras" href="/"></a>
                </div>
                <div className="header--enlaces">
                    <ul className="header--enlaces__lista">
                        <li><a href=""> Clases </a></li>
                        <li><a href=""> Blog </a></li>
                        <li><a href=""> Foro </a></li>
                        <li><a href=""> Agenda </a></li>
                        <li><a href="">TV </a></li>
                        <li><a href="">Contactanos </a></li>
                    </ul>
                </div>
                <div className="header--usuario">
                    <img className="header--usuario__image" src="../images/logo.webp" alt=""/>
                    <span className="header--usuario__score" >10.619 pts </span>
                    <img className="header--usuario__notifications" src="" alt=""/>
                    <form>
                        <input className="header--usuario__search" type="text" placeholder="Buscar en Platzi" />
                        <button className="header--usuario__button">Buscar </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NavBar