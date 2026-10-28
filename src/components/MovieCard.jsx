import { useState } from "react";
import '../styles/MovieCard.css';

function MovieCard({title, year, category}){
    const [visible, isVisible] = useState(false);
    const [likes, isLikes] = useState(0);

    return (
        <div className="moviecard-card">
            <div className="moviecard-card-title">{title}</div>
            {visible && 
                <div className="moviecard-card-details">
                    <div className="moviecard-card-level">Rok: {year}</div>
                    <div className="moviecard-card-category">Kategoria: {category}</div>
                </div>}
            <div className="moviecard-card-likes">Polubienia: {likes}</div>
            <button onClick={() => isLikes(likes + 1)}>
                Lubię
            </button>
            <button onClick={() => isVisible(!visible)}>
                {visible === true ? "Ukryj szczegóły" : "Pokaż szczegóły"}
            </button>
        </div>
    )
}

export default MovieCard;