// ZADANIE 3
function CheapProductsList({products = []}) {
  const under1000 = products.filter((product) => product.price < 1000);

  return (
    <div>
      <h3>Produkty poniżej 1000 zł:</h3>
      {under1000.map((product) => (
        <p key={product.id}>
          {product.name}: {product.price} zł
        </p>
      ))}
    </div>
  );
}

export default CheapProductsList;