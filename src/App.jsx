
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";


function App() {
  const products = [
    { id: 1, name: "Laptop", category: "Komputery", price: 3500, available: false },
    { id: 2, name: "Monitor", category: "Monitory", price: 1200, available: true  },
    { id: 3, name: "Klawiatura", category: "Akcesoria", price: 300, available: true  }
  ];
  return (
    <>
      <Header />

      <br/>
      <br/>

    {products.map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        category={product.category}
        price={product.price}
        available={product.available}
      />
    ))}

      <br/>
      <br/>

      <Footer />
  </>
  );

}

export default App;