import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

function App() {

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

  return (
    <>
      <Header />

      <br />
      <br />

      {technologies.map((technology) => (
        <Technology 
          key={technology.id}
          name={technology.name}
          category={technology.category}
          hours={technology.hours}
          image={technology.image}
        />
      ))}

    <br />
    <br />

    <Footer />
  </>
  );

}

export default App;