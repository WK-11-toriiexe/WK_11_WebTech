import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import { useState } from "react";
import './App.css';

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const technologies = [
  { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
  { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
  { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
  { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
  { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
  { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
  { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
  { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
  { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
  ];

  const filteredTechnologies = technologies.filter((technology) => {
    return selectedCategory === "Wszystkie" ||
      technology.category === selectedCategory;
  });

  return (
    <>
      <Header />

      <br />
      <br />

      <main>
        <div className="technology-filters">
          <button
            className={selectedCategory === "Wszystkie" ? "active" : ""}
            aria-pressed={selectedCategory === "Wszystkie"}
            onClick={() => setSelectedCategory("Wszystkie")}>
            Wszystkie
          </button>
          <button
            className={selectedCategory === "Frontend" ? "active" : ""}
            aria-pressed={selectedCategory === "Frontend"}
            onClick={() => setSelectedCategory("Frontend")}>
            Frontend
          </button>
          <button
            className={selectedCategory === "Backend" ? "active" : ""}
            aria-pressed={selectedCategory === "Backend"}
            onClick={() => setSelectedCategory("Backend")}>
            Backend
          </button>
          <button
            className={selectedCategory === "Baza danych" ? "active" : ""}
            aria-pressed={selectedCategory === "Baza danych"}
            onClick={() => setSelectedCategory("Baza danych")}>
            Baza danych
          </button>
        </div>
        <div className="chosen-category-grid">
          <p>Wybrana kategoria: {selectedCategory}</p>
          <p>Liczba technologi: {filteredTechnologies.length}</p>
          {filteredTechnologies.length === 0 &&
          <p>Brak technologii w wybranej kategorii</p>}
        </div>
        <div className="technology-grid">
          {filteredTechnologies.map((technology) => (
            <Technology
              key={technology.id}
              name={technology.name}
              category={technology.category}
              hours={technology.hours}
              image={technology.image}
            />
          ))}
        </div>
      </main>

    <br />
    <br />

    <Footer />
  </>
  );

}

export default App;