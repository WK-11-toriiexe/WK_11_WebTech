import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Product from "./components/Product";
import User from "./components/User";

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

    <Product 
      name="Laptop" 
      price={3500}
      onSelect = {selectProduct}
    />

      <br/>
      <br/>
      <br/>

      <User name="Anna" role="Administrator" />

      <br/>
      <br/>

    <Footer/>
    </>
  );

}

export default App;