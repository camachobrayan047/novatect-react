import './services.css';
import ProfitCard from '../shared/profit-card/ProfitCard.jsx';

const futures = [
    {
        icon: "01",
        title: "Automatización",
        description: "Reduce tareas repetitivas y conecta acciones frecuentes para que tu equipo gane teimpo cada semana"

    },
    {
        icon: "02",
        title: "Analitica",
        description: "Organiza indicadores relevantes y convierte los datos del negocio en información fácil de interpretar."
    },
    {
        icon: "03",
        title: "Integraciones",
        description: "Conecta herramientas y servicios para evitar procesos duplicados y mantener la infromacion sincronizada."
    },
    {
        icon: "04",
        title: "Seguridad",
        description: "Protege la informacion y establece buenas practicas para que el crecimiento digital también sea confiable."
    }
];

function Services() {
    return (
        <section className="section" id="servicios">
            <div className="container">
                <div className="section-heading">
                    <span className="eyebrow">Servicios</span>
                    <h2>Todo lo que necesitas para operar mejor.</h2>
                    <p>Soluciones modulares que pueden adoptar de forma progresiva según tu negocio.</p>
                </div>

                <div className="features-grid">
                    {futures.map((feature) => (
                        <ProfitCard icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;