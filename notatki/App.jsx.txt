import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak", downloads: 35 },
    { id: 20, alt: "Bukiet", downloads: 43 },
    { id: 30, alt: "Dalmatyńczyk", downloads: 2 }
  ]);

  function download(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: photo.downloads + 1 };
        }
        return photo;
      })
    );
  }

  return (
    <div>
      <h1>Galeria</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.alt}</h2>
          <p>Pobrania: {photo.downloads}</p>
          <button onClick={() => download(photo.id)}>Pobierz</button>
        </div>
      ))}
    </div>
  );
}

export default App;