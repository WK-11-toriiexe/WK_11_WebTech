import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak", downloads: 35, fileName: "mak.webp" },
    { id: 20, alt: "Bukiet", downloads: 43, fileName: "bukiet.webp" },
    { id: 30, alt: "Dalmatyńczyk", downloads: 2, fileName: "dalmatynczyk.webp" },
    { id: 40, alt: "Labrador", downloads: 67, fileName: "labrador.webp"}
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

  function reset(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: 0 };
        }
        return photo;
      })
    );
  }

  return (
    <div>
      <h1>Galeria</h1>
      {photos.map((photo) => (
        <div 
        key={photo.id}
        style={{marginBottom: "3%", marginLeft: "auto", marginRight: "auto", width: "60%", padding:"3%"}}
        >
          <img 
          src={`${import.meta.env.BASE_URL}photos/${photo.fileName}`} 
          alt={`${photo.alt}`} 
          style={{width: "20%"}}
          />
          <h2>{photo.alt}</h2>
          <p>Pobrania: {photo.downloads}</p>
          <button onClick={() => download(photo.id)}>Pobierz</button>
          <button onClick={() => reset(photo.id)}>Wyzeruj</button>
        </div>
      ))}
    </div>
  );
}

export default App;