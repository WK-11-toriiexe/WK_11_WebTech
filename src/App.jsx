import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import Tablice from "./components/Tablice.jsx";

function App() {
  return (
    <>
      <Header />

      <Navigation />

      <main>

        <Student />

        <InfoBox />

        <CourseCard />

        <Tablice />

        <Technology />

        <Technology />

        <Technology />

      </main>

      <Footer />
    </>
  );
}

export default App;