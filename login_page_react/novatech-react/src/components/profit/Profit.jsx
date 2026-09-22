import './profit.css';
import ProfitCard from '../shared/profit-card/ProfitCard.jsx';

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
                    <ProfitCard
                        icon="01"
                        title="Título de la tarjeta"
                        description="Descripción de la tarjeta de beneficio."
                    />
                    <ProfitCard
                        icon="02"
                        title="Otra tarjeta de beneficio"
                        description="Descripción de la segunda tarjeta de beneficio."
                    />
                    <ProfitCard
                        icon="03"
                        title="Tercera tarjeta de beneficio"
                        description="Descripción de la tercera tarjeta de beneficio."
                    />
                </div>
            </div>
        </section>
    )
}

export default Profit;