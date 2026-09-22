import './profit.css';
import ProfitCard from '../shared/profit-card/ProfitCard.jsx';

const futures = [
    {
        icon: "01",
        title: "Título de la tarjeta",
        description: "Descripción de la tarjeta de beneficio."
    },
    {
        icon: "02",
        title: "Segunda tarjeta de beneficio",
        description: "Descripción de la segunda tarjeta de beneficio."
    },
    {
        icon: "03",
        title: "Tercera tarjeta de beneficio",
        description: "Descripción de la tercera tarjeta de beneficio."
    }
];



function Profit() {
    return (
        <section className="section" id="beneficios">
            <div className="container">
                <div className="section-heading">
                    <span className="eyebrow">Beneficios</span>
                    <h2>Menos complejidad. Más tiempo para crecer.</h2>
                    <p>Una experiencia pensada para resolver necesidades reales sin llenar tu negocio de herramientas innecesarias.</p>
                </div>

                <div className="feature-grid">
                    {futures.map((feature) => (
                        <ProfitCard icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profit;