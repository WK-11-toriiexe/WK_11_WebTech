function Student({ students }) {
  return (
    <>
    <h2> Wersja 1. </h2>
        <div>
        {
            students.map((student) => (
                <p key={student.id}>
                {student.name} - Klasa: {student.className}
                </p>
            ))
        }
        </div>

    <br />

    <h2> Wersja 2. </h2>
        <div>
        {
            students.map((student) => {
                return (
                    <p key={student.id}>
                    {student.name} - Klasa: {student.className} - Wiek: {student.age} - Specjalizacja: {student.specialization}
                    </p>
                );
            })
        }
        </div>
    </>
  );
}

export default Student;