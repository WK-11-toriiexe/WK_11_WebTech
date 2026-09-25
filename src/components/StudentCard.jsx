function StudentCard({ name, className, specialization, age, active }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Klasa: {className}</p>
      <p>Kierunek: {specialization}</p>
      <p>Wiek: {age}</p>
      <p>Status: {active ? "aktywny" : "nieaktywny"}</p>
    </div>
  );
}

export default StudentCard;