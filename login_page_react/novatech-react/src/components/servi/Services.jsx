import React from 'react';
import './services.css';

function Services() {
    const servicios = [
        {
            id: "01",
            tag: "Eficiencia",
            titulo: "Automatización",
            descripcion: "Reduce tareas repetitivas y conecta acciones frecuentes para que tu equipo gane tiempo cada semana."
        },
        {
            id: "02",
            tag: "Decisiones",
            titulo: "Analítica",
            descripcion: "Organiza indicadores relevantes y convierte los datos del negocio en información fácil de interpretar."
        },
        {
            id: "03",
            tag: "Conexión",
            titulo: "Integraciones",
            descripcion: "Conecta herramientas y servicios para evitar procesos duplicados y mantener la información sincronizada."
        },
        {
            id: "04",
            tag: "Confianza",
            titulo: "Seguridad",
            descripcion: "Protege la información y establece buenas prácticas para que el crecimiento digital también sea confiable."
        }
    ];

    return (
        <section className="services-section" id="servicios">
            {/* Contenedor global alineado con Hero */}
            <div className="container">

                {/* Encabezado de la sección */}
                <div className="services-header">
                    <div className="header-left">
                        <span className="eyebrow">SERVICIOS</span>
                        <h2>Todo lo que necesitas para operar mejor.</h2>
                    </div>
                    <div className="header-right">
                        <p className="services-subtitle">
                            Soluciones modulares que puedes adoptar de forma progresiva según el momento de tu negocio.
                        </p>
                    </div>
                </div>

                {/* Grilla de Tarjetas */}
                <div className="services-grid">
                    {servicios.map((item) => (
                        <div key={item.id} className="service-card">
                            <div className="card-top">
                                <span className="card-number">{item.id}</span>
                                <span className="card-tag">{item.tag}</span>
                            </div>
                            <h3>{item.titulo}</h3>
                            <p className="card-desc">{item.descripcion}</p>
                            <a href="#contacto" className="card-link">
                                Explorar solución <span>&rarr;</span>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;