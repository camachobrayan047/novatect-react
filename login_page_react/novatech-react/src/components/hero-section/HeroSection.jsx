import { useState } from 'react';
import './hero-section.css';

function HeroSection() {
    const mostrarMensaje = () => {
        alert("¡Bienvenido a NovaTech!");
    };

    return (
        <section className="hero" id="inicio">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Tecnología para crecer</span>
                    <h1>Impulsa tu negocio con soluciones digitales simples y modernas.</h1>
                    <p className="hero-text">
                        Centraliza procesos, automatiza tareas y convierte tus datos en decisiones.
                        NovaTech reúne las herramientas esenciales para pequeñas empresas en una sola plataforma.
                    </p>

                    <div className="hero-actions">
                        <button className="button" onClick={mostrarMensaje}>Comenzar ahora</button>
                        <a className="button button-secondary" href="#servicios">Conocer servicios</a>
                    </div>

                    <div className="hero-points">
                        <span>✓ Implementación rápida</span>
                        <span>✓ Sin procesos complicados</span>
                        <span>✓ Soporte cercano</span>
                    </div>
                </div>

                <div className="hero-visual" aria-label="Panel conceptual de NovaTech">
                    <div className="dashboard-card dashboard-main">
                        <span className="dashboard-label">Panel de rendimiento</span>
                        <strong>+32%</strong>
                        <small>Productividad este mes</small>
                        <div className="chart-bars" aria-hidden="true">
                            <i></i><i></i><i></i><i></i><i></i><i></i>
                        </div>
                    </div>
                    <div className="dashboard-card dashboard-mini one">
                        <span>Automatizaciones</span>
                        <strong>18</strong>
                    </div>
                    <div className="dashboard-card dashboard-mini two">
                        <span>Tareas ahorradas</span>
                        <strong>124 h</strong>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default HeroSection;
