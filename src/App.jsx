import InfoBox from "./components/InfoBox";

function App() {
  const technologies = ["React", "JavaScript", "CSS"];

  function selectTechnology(technology){
    console.log(`Kliknięto technologię: ${technology}`)
  }

 return (
  <>
    <main>
      <h1>Lista Technologii</h1>
      
      {technologies.map((technology) => (
        <InfoBox 
          key={technology} 
          technology={technology} 
          onSelect={selectTechnology} 
        />
      ))}
    </main>
  </>
  );
}

export default App;