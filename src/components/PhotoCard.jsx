import { useState } from "react";

function PhotoCard({ photo, onDownload, onReset }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="d-inline-block">
      <img
        src={"/assets/" + photo.filename}
        alt={photo.alt}
        className="rounded"
        style={{ margin: "5px", maxWidth: "200px" }}
      />
      <h2>{photo.alt}</h2>
      <p>Pobrania: {photo.downloads}</p>
      <p>Polubienia: {likes}</p>
      <button onClick={() => onDownload(photo.id)}>Pobierz</button>
      <button onClick={() => onReset(photo.id)}>Wyzeruj</button>
      <button onClick={() => setLikes(likes + 1)}>Polub</button>
    </div>
  );
}

export default PhotoCard;