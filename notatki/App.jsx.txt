import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/StudentCard.jsx";

function App() {
  return (
    <>
      <Header />

      <main>

        <StudentCard
          name="Jan Kowalski"
          className="4P"
          specialization="technik programista"
          age={18}
          active={true}
        />

        <StudentCard
          name="Karol Nowak"
          className="5F"
          specialization="technik fotograf"
          age={19}
          active={true}
        />

        <StudentCard
          name="Rafał Adamczyk"
          className="3M"
          specialization="technik mechanik"
          age={17}
          active={true}
        />

        <StudentCard
          name="Paweł Foka"
          className="2I"
          specialization="technik informatyk"
          age={16}
          active={true}
        />

        <Technology
          name="React"
          category="Frontend"
          hours={30}
        />

        <Technology
          name="Node.js"
          category="Backend"
          hours={40}
        />

        <Technology
          name="MySQL"
          category="Baza danych"
          hours={20}
        />

      </main>

      <Footer />
    </>
  );
}

export default App;