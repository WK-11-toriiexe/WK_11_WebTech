// ZADANIE 4
import { useState } from 'react';

function ProductFilter({ products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === "Wszystkie" || product.category === selectedCategory
    );
  });

  return (
    <section>
      <h2>Filtrowanie produktów</h2>
      <button onClick={() => setSelectedCategory("Wszystkie")}>Wszystkie</button>
      <button onClick={() => setSelectedCategory("Akcesoria")}>Akcesoria</button>
      <button onClick={() => setSelectedCategory("Komputery")}>Komputery</button>
      <button onClick={() => setSelectedCategory("Monitory")}>Monitory</button>
      <button onClick={() => setSelectedCategory("Telefony")}>Telefony</button>

      <p>Wybrana kategoria: {selectedCategory}</p>
      <p>Liczba wyników: {filteredProducts.length}</p>

      <div>
        {filteredProducts.map((product) => (
          <p key={product.id}>
            {product.name}: {product.price} zł
          </p>
        ))}
      </div>
      {filteredProducts.length === 0 && <p>Brak produktów w tej kategorii.</p>}
    </section>
  );
}

export default ProductFilter;