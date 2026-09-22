import './profit-card.css';


function ProfitCard(props) {
    console.log(props)

    return (
        <article className="feature-card">
            <div className="feature-icon" aria-hidden="true">{props.icon}</div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default ProfitCard;