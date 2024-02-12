import './Card.css'

// function Card(props) {
//         return (
//             <div className="card">
//                 <img src={props.image} className="card-image" />
//                 <div className="card-content">
//                     <h2>{props.title}</h2>
//                     <h3>{props.subtitle}</h3>
//                     <p>{props.text}</p>
//                     <button className="btn-card">LIRE PLUS</button>
//                 </div>
//             </div>
//         );
//     }


let Card = ({image, title, subtitle, text, bouton}) => {
    return (
        <div className="card">
            <img src={image} className="card-image"/>
            <div className="card-content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <button className="btn-card">{bouton}</button>
            </div>
        </div>
    );
}

export default Card;


