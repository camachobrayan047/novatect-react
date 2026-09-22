import './navbar.css'
import { useState } from "react";




function Navbar() {


    return (
        <>
            <header className="navbar">
                <div className="container navbar-inner">
                    <a className="brand" href="#inicio" aria-label="Ir al inicio">
                        <span className="brand-mark">N</span>
                        <span>NovaTech</span>
                    </a>

                    <nav className="nav-links" aria-label="Navegación principal">
                        <a href="#inicio">Inicio</a>
                        <a href="#beneficios">Beneficios</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#resultados">Resultados</a>
                        <a href="#contacto">Contacto</a>
                    </nav>

                    <a className="button button-small" href="#contacto">Comenzar</a>
                </div>
            </header>
        </>
    )
}

export default Navbar