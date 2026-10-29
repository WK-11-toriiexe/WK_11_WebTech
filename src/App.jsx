import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showFlowers, setShowFlowers] = useState(true);
  const [showAnimals, setShowAnimals] = useState(true);
  const [showCars, setShowCars] = useState(true);

  const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    { id: 20, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
    { id: 30, alt: "Słonecznik", filename: "obraz3.jpg", category: 1, downloads: 18 },
    { id: 40, alt: "Dalmatyńczyk", filename: "obraz4.jpg", category: 2, downloads: 2 },
    { id: 50, alt: "Labrador", filename: "obraz5.jpg", category: 2, downloads: 67 },
    { id: 60, alt: "Kot", filename: "obraz6.jpg", category: 2, downloads: 29 },
    { id: 70, alt: "Sportowy samochód", filename: "obraz7.jpg", category: 3, downloads: 12 },
    { id: 80, alt: "Terenówka", filename: "obraz8.jpg", category: 3, downloads: 25 },
    { id: 90, alt: "Zabytkowy samochód", filename: "obraz9.jpg", category: 3, downloads: 8 }
  ]);

  const filteredPhotos = photos.filter((photo) => {
    return (
      (photo.category === 1 && showFlowers) ||
      (photo.category === 2 && showAnimals) ||
      (photo.category === 3 && showCars)
    );
  });

  return (
    <div className="main">
      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flowers"
          checked={showFlowers}
          onChange={(event) => setShowFlowers(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="flowers">
          Kwiaty
        </label>
      </div>

      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="animals"
          checked={showAnimals}
          onChange={(event) => setShowAnimals(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="animals">
          Zwierzęta
        </label>
      </div>

      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="cars"
          checked={showCars}
          onChange={(event) => setShowCars(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="cars">
          Samochody
        </label>
      </div>
    </div>
  )
}

export default App;