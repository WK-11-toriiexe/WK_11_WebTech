function Product({ name, price, onSelect }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Cena: {price}</p>
      <button onClick={() => onSelect(name)}>
        Wybierz
      </button>
    </div>
  );
}

export default Product;