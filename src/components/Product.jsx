function Product({ name, price, onSelect }) {
  {/*const handleClick = () => {
    console.log(`Wybrano produkt: ${name}`);
  };*/}

  return (
    <div>
      <h2>{name}</h2>
      <p>Cena: {price}</p>
      {/*<button onClick={handleClick}>Pokaż produkt</button>*/}
      <button onClick={() => onSelect(name)}>Pokaż produkt</button>
    </div>
  );
}

export default Product;