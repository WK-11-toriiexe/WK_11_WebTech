import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const loremText = `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Voluptatum, recusandae expedita eum fugit 
ab voluptas! Assumenda pariatur veritatis itaque possimus 
est consequuntur fugit illum, vitae doloribus quos odio 
nulla praesentium.
Esse ipsum, vero sunt quidem iusto odio quisquam nihil neque 
numquam, non voluptate libero, minus corrupti quasi quam autem 
distinctio in. Saepe nemo maiores et hic quia laudantium dolore debitis.
Incidunt, eveniet! Voluptatem maiores adipisci magni assumenda 
harum distinctio in aspernatur. Facilis recusandae quia 
reiciendis adipisci est accusamus minus voluptas officiis, 
placeat cumque asperiores impedit assumenda repellendus magni 
aspernatur accusantium?
Tenetur magnam vel assumenda saepe atque iste, architecto 
quisquam consequuntur adipisci dignissimos neque natus, quo 
odit voluptate consectetur modi. Vitae amet eaque ad voluptate 
nesciunt dolores modi adipisci voluptatem quisquam?
Dolor quos optio vitae rerum culpa dignissimos, debitis sint, 
voluptatibus architecto deserunt, aut numquam? Provident 
nostrum veritatis nam, ratione facere dolor natus voluptatibus 
voluptate ipsum est quod iste ea esse?`;

function App() {
  const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak", downloads: 35, fileName: "mak.webp" },
    { id: 20, alt: "Bukiet", downloads: 43, fileName: "bukiet.webp" },
    { id: 30, alt: "Dalmatyńczyk", downloads: 2, fileName: "dalmatynczyk.webp" },
    { id: 40, alt: "Labrador", downloads: 67, fileName: "labrador.webp" }
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
      <div className="container mb-5">
        <div className="row">
          <div className="col py-2 bg-success-subtle text-success-emphasis">
            {loremText}
          </div>
          <div className="col py-2 bg-primary-subtle text-primary-emphasis">
            {loremText}
          </div>
          <div className="col py-2 bg-danger-subtle text-danger-emphasis">
            {loremText}
          </div>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row g-3">
          <div className="col-4 px-3 fw-bold bg-light">
            {loremText}
          </div>
          <div className="col-8 px-3 text-center text-primary">
            {loremText}
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row p-4">
          <div className="col-6 bg-primary-subtle text-primary-emphasis">
            {loremText}
          </div>
          <div className="col-6 bg-danger-subtle text-danger-emphasis">
            {loremText}
          </div>
        </div>
      </div>

      <div className="container mb-4 m-3">
        <div className="row">
          <div className="col-3 bg-success-subtle text-success-emphasis">
            {loremText}
          </div>
          <div className="col-3 bg-warning-subtle text-warning-emphasis">
            {loremText}
          </div>
          <div className="col-3 bg-primary-subtle text-primary-emphasis">
            {loremText}
          </div>
          <div className="col-3 bg-danger-subtle text-danger-emphasis">
            {loremText}
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 bg-success-subtle text-success-emphasis">
            {loremText}
          </div>
          <div className="col-12 col-md-6 col-lg-4 bg-danger-subtle text-danger-emphasis">
            {loremText}
          </div>
          <div className="col-12 col-md-6 col-lg-4 bg-primary-subtle text-primary-emphasis">
            {loremText}
          </div>
        </div>
      </div>

      <div class="form-check form-switch">
        <input type="checkbox" id="przypomnienie" className="form-check-input"/>
        <label htmlFor="przypomnienie" className="form-check-label">
          Przypomnienie o kursie
        </label>
      </div>

      <br />
      <br />

      <h1>Galeria</h1>
      {photos.map((photo) => (
        <div key={photo.id} className="mb-5 mx-auto w-75 p-4">
          <img
            src={`${import.meta.env.BASE_URL}photos/${photo.fileName}`}
            alt={photo.alt}
            className="w-25"
          />
          <h2>{photo.alt}</h2>
          <p>Pobrania: {photo.downloads}</p>
          <button type="button" className="btn btn-primary me-2" onClick={() => download(photo.id)}>Pobierz</button>
          <button type="button" className="btn btn-warning" onClick={() => reset(photo.id)}>Wyzeruj</button>
        </div>
      ))}
    </div>
  );
}

export default App;