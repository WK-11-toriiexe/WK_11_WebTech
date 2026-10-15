import { useState } from "react";

function Technology({ name, category, hours, image }) {
  const category1 = 'Frontend';
  const category2 = 'Backend';
  const category3 = 'Baza danych';

  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);

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
          width: '35%', 
          margin: 'auto',
          borderRadius: '80px'
          }}>{category}</p>
        <p style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '25%', 
          margin: 'auto',
          marginTop: '15px',
          borderRadius: '80px'
        }}>Czas nauki: {hours} godz.</p>

        <br/>

        <p style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '25%', 
          margin: 'auto',
          marginTop: '15px',
          borderRadius: '80px'
        }}>Polubienia: {likes}</p>
        <button onClick={() => setLikes(likes + 1)} style={{
          marginRight: '7px'
        }}>
          Lubię
        </button>
        <button onClick={() => setLikes(0)} style={{
          marginRight: '7px'
        }}>
          Reset
        </button>
        <br/>
        <p style={{
          backgroundColor: category === category1 ? '#FFE0B2' : category === category2 ? '#E1BEE7' : '#B3E5FC', 
          width: '35%', 
          margin: 'auto',
          marginTop: '15px',
          borderRadius: '80px'
        }}>
          Status nauki: {isLearning ? "Uczę się" : "Jeszcze się nie uczę"}
        </p>
        <button onClick={() => setIsLearning(!isLearning)}>
          Zmień status nauki
        </button>
      </div>
    </div>
  );
}

export default Technology;
