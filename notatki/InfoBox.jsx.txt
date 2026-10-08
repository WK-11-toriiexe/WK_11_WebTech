function InfoBox({ technology, onSelect }) {
  return (
    <section>
      <h2>{technology}</h2>
      <button onClick={() => onSelect(technology)}>
        Wybierz {technology}
      </button>
    </section>
  );
}

export default InfoBox;
