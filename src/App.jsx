import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje imię i nazwisko",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };

  const student = {
    name: "Wiktoria",
    surname: "Kędzior",
    className: "4P",
    specialization: "technik programista"
  };

  const course = {
    name: "Kurs HTML i CSS",
    teacher: "mgr inż Ludwik de Laveaux",
    hours: 26,
    completed: true
  };

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>


      <br/>

      <p>{technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>


      <br/>

      <p>Uczeń: {student.name} {student.surname}</p>

      <p>Klasa: {technology.className}</p>

      <p>Kierunek: {technology.specialization}</p>

      <br/>

      <section>
        <h2>Kurs: {course.name}</h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Godzin: {course.hours}</p>
        <p>Czy ukończono kurs: {course.completed}</p>
        
      </section>
      

    </div>
    
  );
}

export default App;