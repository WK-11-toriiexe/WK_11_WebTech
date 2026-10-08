import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {

  function selectTechnology(name) {
    console.log("Wybrano: " + name);
  }

  function selectProduct(name) {
    console.log(`Wybrano produkt: ${name}`)
  }

  return (
    <>
    <Header/>

      <br/>
      <br/>

      <Technology
        name="React"
        category="Frontend"
        hours={30}
        onSelect={selectTechnology}
      />

      <br/>
      <br/>
      <br/>

    {/*Zakomentowano działanie zadania samodzielnego,
    w celach ekspandacji kodu według polecenia
    w zadaniu dodatkowym - w oparcie o przekazanie
    funkcji poprzez Props - w przypadku zadania samodzielnego
    w funkcji nie znajduje się jeszcze onSelect,
    jednak z racji realizacji zadania dodatkowego już się ono
    tam znajduje*/}

    {/*<Product 
      name="Laptop" 
      price="599.99zł" 
    />*/}

    <Product 
      name="Laptop" 
      price="599.99zł" 
      onSelect = {selectProduct}
    />

      <br/>
      <br/>

    <Footer/>
    </>
  );

}

export default App;