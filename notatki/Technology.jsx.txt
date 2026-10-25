import { useState } from "react";
import "../styles/Technology.css";

function Technology({ name, category, hours, image }) {
  // Wybór motywu kolorystycznego na podstawie kategorii
  const theme =
    category === "Frontend" ? "theme-frontend" :
    category === "Backend" ? "theme-backend" :
    "theme-database";

  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);
  const [visible, setVisible] = useState(false);

  function toggleDetails() {
    setVisible(!visible);
  }

  function showTechnology() {
    console.log("Technologia: " + name);
    console.log("Kategoria: " + category);
    console.log("Czas nauki: " + hours + " godz.");
  }

  function showName(technologyName) {
    console.log(technologyName);
  }

  return (
    <div className={`technology-card ${theme}`}>
      <div className="technology-header">
        <img
          className="technology-image"
          src={`${import.meta.env.BASE_URL}technologie_karty_webp/${image}`}
          alt={`Logo technologii ${name}`}
        />
      </div>

      <div className="technology-body">
        <h3 className="badge badge-name">{name}</h3>

        <button
          className="button-details"
          onClick={toggleDetails}
          aria-expanded={visible}
        >
          {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
        </button>

        {visible && (
          <div className="technology-details">
            <p className="badge badge-category">{category}</p>
            <p className="badge badge-hours">Czas nauki: {hours} godz.</p>
          </div>
        )}

        <br />

        <p className="badge badge-likes">Polubienia: {likes}</p>
        <button
          className="button-space-right"
          onClick={() => setLikes(likes + 1)}
        >
          Lubię
        </button>
        <button
          className="button-space-right"
          onClick={() => setLikes(0)}
        >
          Resetuj polubienia
        </button>

        <br />

        <p className="badge badge-status">
          Status nauki: {isLearning ? "Uczę się" : "Jeszcze się nie uczę"}
        </p>
        <button onClick={() => setIsLearning(!isLearning)}>
          Zmień status nauki
        </button>

        <br />

        <button
          className="button-space-right button-console"
          onClick={showTechnology}
        >
          Pokaż informacje w konsoli
        </button>
        <button
          className="button-console"
          onClick={() => showName(name)}
        >
          Wypisz nazwę
        </button>
      </div>
    </div>
  );
}

export default Technology;