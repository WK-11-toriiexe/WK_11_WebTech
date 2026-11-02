import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showDescription, setShowDescription] = useState(true);
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div className="container">
      <h1>Kurs React</h1>

      <div className="d-flex justify-content-center">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="show-description"
            checked={showDescription}
            onChange={(event) => setShowDescription(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="show-description">
            Pokaż opis
          </label>
        </div>
      </div>

      <button onClick={() => setShowDescription(false)}>Ukryj opis</button>

      <p>Opis: {showDescription ? "włączony" : "wyłączony"}</p>

      {showDescription && <p>Na kursie poznajemy tworzenie aplikacji React.</p>}
    
      <div className="d-flex justify-content-center">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="show-price"
            checked={showPrice}
            onChange={(event) => setShowPrice(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="show-price">
            Pokaż cenę
          </label>
        </div>
      </div>
    
    {showPrice && <p>Cena: 150 zł</p>}
    
    </div>
  );
}

export default App;