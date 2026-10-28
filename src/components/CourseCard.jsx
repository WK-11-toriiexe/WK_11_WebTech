import { useState } from "react";
import '../styles/CourseCard.css';

function CourseCard({name, level, hours}){
    const [visible, isVisible] = useState(false);

    return (
        <div className="coursecard-card">
            <div className="coursecard-card-name">{name}</div>
            {visible && 
                <div className="coursecard-card-details">
                    <div className="coursecard-card-level">Poziom: {level}</div>
                    <div className="coursecard-card-hours">Liczba godzin: {hours}</div>
                </div>}
            <button onClick={() => isVisible(!visible)}>
                {visible === true ? "Ukryj szczegóły" : "Pokaż szczegóły"}
            </button>
        </div>
    )
}

export default CourseCard;