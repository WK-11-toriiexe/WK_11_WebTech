import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CheapProductsList from './components/CheapProductsList'
import ProductFilter from './components/ProductFilter'

function App() {
  const numbers = [4, 11, 18, 7, 25, 10];

  const products = [
    { id: 1, name: "Laptop", category: "Komputery", price: 3500 },
    { id: 2, name: "Mysz", category: "Akcesoria", price: 80 },
    { id: 3, name: "Klawiatura", category: "Akcesoria", price: 200 },
    { id: 4, name: "Monitor", category: "Monitory", price: 900 }
  ];

  // ZADANIE 1
  const greaterThanTen = numbers.filter((number) => number > 10);
  const tenOrLess = numbers.filter((number) => number <= 10);
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  // ZADANIE 2
  const computers = products.filter((product) => product.category === "Komputery");
  const cheapProducts = products.filter((product) => product.price <= 200);
  const phones = products.filter((product) => product.category === "Telefony");

  return (
    <>
      <Header />

      <br />
      <br />

      <section className="zadaniePierwsze">
        <h1>Zadanie 1.</h1>
        <h3>Pierwotnie:</h3>
        <p>{numbers.join(', ')}</p>
        <h3>Większe od 10: </h3>
        <p>{greaterThanTen.join(', ')}</p>
        <h3>Mniejsze lub równe 10:</h3>
        <p>{tenOrLess.join(', ')}</p>
        <h3>Parzyste:</h3>
        <p>{evenNumbers.join(', ')}</p>
      </section>

      <section className="zadanieDrugie">
        <h1>Zadanie 2.</h1>
        <h3>Komputery:</h3>
        {computers.map(p => <p key={p.id}>{p.name} - {p.price} zł</p>)}
        <h3>Do 200zł:</h3>
        {cheapProducts.map(p => <p key={p.id}>{p.name} - {p.price} zł</p>)}
        <h3>Telefony (długość {phones.length}):</h3>
        {phones.map(p => <p key={p.id}>{p.name}</p>)}
      </section>

      {/* ZADANIE 3 */}
      <section className="zadanieTrzecie">
        <h1>Zadanie 3.</h1>
        <CheapProductsList products={products} />
      </section>

      {/* ZADANIE 4 */}
      <section className="zadanieCzwarte">
        <h1>Zadanie 4.</h1>
        <ProductFilter products={products} />
      </section>

      {/* ZADANIE 5 */}
      <section className="zadaniePiate">
        <h1>Zadanie 5.</h1>
        <pre>
          <code>
            {`const result = products.filter((product) => {
        product.price < 1000;
      });`}
          </code>
        </pre>

        <p>
          Podany zapis zwraca pustą tablicę, ponieważ ciało funkcji filter()
          zostało zapisane przy użyciu nawiasów klamrowych {} bez słowa kluczowego return.
          W przypadku decydowania się na nawiasy klamrowe, należy pamiętać o jawnym
          zwróceniu wyniku:
        </p>

        <pre>
          <code>
            {`const result = products.filter((product) => {
        return product.price < 1000;
      });`}
          </code>
        </pre>

        <p>
          Można także zapisać tę funkcję inaczej - za pomocą zapisu skróconego,
          w którym wartość jest zwracana niejawnie, co oznacza, że nie musimy
          używać słowa kluczowego return:
        </p>

        <pre>
          <code>
            {`const result = products.filter((product) => product.price < 1000);`}
          </code>
        </pre>
      </section>

      <br/>
      <br/>
      
      <Footer/>
    </>
  )
}

export default App;