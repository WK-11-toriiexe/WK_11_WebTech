function Technology({ name, category, hours, image }) {
  const category1 = 'Frontend';
  const category2 = 'Backend';
  const category3 = 'Baza danych';
  return (
    <div className="card" style={{
      backgroundColor: category === category1 ? '#E65100' : category === category2 ? '#4A148C' : '#01579B',
      margin: '5%',
      paddingBottom: '15px',
      borderRadius: '80px'
    }}>
      <div className="card-header" style={{
        padding: '15px'
      }}>
        <img src={`/technologie_karty_webp/${image}`} alt="Nagłówek karty" style={{
        borderRadius: '80px'}}/>
      </div>
      <div className="card-body" style={{
        color: category === category1 ? '#E65100' : category === category2 ? '#4A148C' : '#01579B'
      }}>
        <h3 style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '50%', 
          margin: 'auto',
          marginBottom: '15px',
          borderRadius: '80px'
        }}>{name}</h3>
        <p style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '20%', 
          margin: 'auto',
          borderRadius: '80px'
          }}>{category}</p>
        <p style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '10%', 
          margin: 'auto',
          marginTop: '15px',
          borderRadius: '80px'
        }}>{hours}</p>
      </div>
    </div>
  );
}

export default Technology;
