import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showDescription, setShowDescription] = useState(false);
  const [showDescriptionSwitch, setShowDescriptionSwitch] = useState(false);

  return (
    <div className="container">
      <div>
        <h1>Kurs React</h1>

        <input
          type="checkbox"
          id="show-description"
          checked={showDescription}
          onChange={(event) => setShowDescription(event.target.checked)}
        />
        <label htmlFor="show-description">Pokaż opis</label>

        <p>Opis: {showDescription ? "włączony" : "wyłączony"}</p>

        {showDescription && <p>Na kursie poznajemy tworzenie aplikacji React.</p>}
      </div>

      <br />
      <br />

      <div className="d-flex justify-content-center">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="show-description-switch"
            checked={showDescriptionSwitch}
            onChange={(event) => setShowDescriptionSwitch(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="show-description-switch">
            Pokaż opis
          </label>
        <p>Opis: {showDescriptionSwitch ? "włączony" : "wyłączony"}</p>

        {showDescriptionSwitch && <p>Na kursie poznajemy tworzenie aplikacji React.</p>}
        </div>
      </div>
    </div>
  );
}

export default App;