function CourseCard() {
  const course = {
    name: 'Dominika Domańczyk',
    teacher: 'Tomasz Drzymała',
    hours: 30,
    completed: true,
  };

  return (
    <section>
      <h2>Karta kursu</h2>
      <p className="kursant">Osoba zdająca kurs: {course.name}</p>
      <p className="nauczyciel">Nauczyciel: {course.teacher}</p>
      <p className="czasTrwaniaKursuGodziny">Czas trwania kursu (w godzinach): {course.hours}</p>
      <p className="czasTrwaniaKursuMinuty">Czas trwania kursu (w minutach): {course.hours * 60}</p>
      <p className="ukonczonyKurs">Czy ukończono kurs: {course.completed ? 'Tak' : 'Nie'}</p>
    </section>
  );
}

export default CourseCard;