import { useState } from "react";

function PhotoCard({ photo, onDownload, onReset }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="d-inline-block m-2 align-top">
      <img
        src={"/assets/" + photo.filename}
        alt={photo.alt}
        className="rounded d-block"
        style={{ width: "200px" }}
      />
      <h4>{photo.alt}</h4>
      <p className="mb-1">Pobrania: {photo.downloads}</p>
      <p>Polubienia: {likes}</p>
      <button type="button" className="btn btn-success me-2" onClick={() => onDownload(photo.id)}>
        Pobierz
      </button>
      <button type="button" className="btn btn-warning me-2" onClick={() => onReset(photo.id)}>
        Wyzeruj
      </button>
      <button type="button" className="btn btn-primary" onClick={() => setLikes(likes + 1)}>
        Polub
      </button>
    </div>
  );
}

export default PhotoCard;