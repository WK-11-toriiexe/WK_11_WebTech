function StudentCard({ name, className, specialization, age, active }) {
  return (
    <div>
      <p>{name}</p>
      <p>{className}</p>
      <p>{specialization}</p>
      <p>{age}</p>
      <p>{active}</p>
    </div>
  );
}

export default StudentCard;