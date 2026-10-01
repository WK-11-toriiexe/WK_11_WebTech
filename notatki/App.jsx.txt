import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Student from "./components/Student";

function App() {

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    }
  ];


    const students = [
    { id: 1, name: "Anna", className: "4P", age: 17, specialization: "Tworzenie aplikacji desktopowych"},
    { id: 2, name: "Jan", className: "4P", age: 19, specialization: "Tworzenie aplikacji mobilnych" },
    { id: 3, name: "Adam", className: "4P", age: 18, specialization: "Tworzenie aplikacji webowych" },
    { id: 4, name: "Nikodem", className: "4P", age: 17, specialization: "Tworzenie aplikacji mobilnych" }
  ];

  {
    /*
    const samochody = [
    { id: 1, marka: "Toyota", model: "Corolla" },
    { id: 2, marka: "BMW", model: "Seria 3" },
    { id: 3, marka: "Audi", model: "A4" },
    { id: 4, marka: "Mercedes-Benz", model: "Klasa C" },
    { id: 5, marka: "Ford", model: "Mustang" }
  ];

    return (
      <>
        {
          technologies.map((technology) => {
          console.log(technology.name);

          return technology.name;
        })

        }

        <br />

        {
          samochody.map((samochod) => {
          console.log(samochod.marka);

          return samochod.marka + " ";
        })

        }
      </>
    );
    */
  }

  {
    /*
      return (
        <>
          {
            technologies.map((technology) => {
            console.log(technology.name);

            return technology.name;
          })

          }
        </>
      );
  */
  }
  

  return (
    <>
      <Header />

      <hr />

      <main>
        {/*Sposób 1. - Niejawny return*/
        technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))}

        { /*Sposób 2. - Jawny return*/
        /*technologies.map((technology) => {
          return <Technology key={technology.id} name={technology.name}
            category={technology.category} hours={technology.hours}/>
        })*/}

        <br />
        <br />
        <br />

        <Student students = {students}/>
      </main>

      <hr />

      <Footer />
    </>
  );
}

export default App;