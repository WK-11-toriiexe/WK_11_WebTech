import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import MovieCard from "./components/MovieCard";

function App() {
  const courses = [
    {
      id: 1,
      name: "JavaScript",
      level: "Podstawowy",
      hours: 30
    },
    {
      id: 2,
      name: "React",
      level: "Średniozaawansowany",
      hours: 40
    },
    {
      id: 3,
      name: "Node.js",
      level: "Średniozaawansowany",
      hours: 35
    }
  ];

  const movies = [
    {
      id: 1,
      title: "Incepcja",
      year: 2010,
      category: "Science fiction"
    },
    {
      id: 2,
      title: "Matrix",
      year: 1999,
      category: "Science fiction"
    },
    {
      id: 3,
      title: "Gladiator",
      year: 2000,
      category: "Dramat"
    }
  ];

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

      <main>
        <div className="coursecard-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              level={course.level}
              hours={course.hours}
            />
          ))}
        </div>

        <br />
        <br />

        <div className="moviecard-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              category={movie.category}
            />
          ))}
        </div>

        <br />
        <br />

        <div className="technology-grid">
          {technologies.map((technology) => (
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