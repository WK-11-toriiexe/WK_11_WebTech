import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [toGenPass, setToGenPass] = useState(true);
  const [generatedPass, setGeneratedPass] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [passSeen, setPassSeen] = useState(false);


  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  function fillIn(formData) {
    const emailValue = formData.get("inputEmail") || ""; 
    const loginValue = formData.get("inputLogin") || ""; 
    
    setEmail(emailValue);
    setLogin(loginValue);
    setPass(passInputValue);
  }

  function generatePassword() {
    let randPass = "";
    for (let i = 0; i < 12; i++) {
      const charCode = Math.floor(Math.random() * 94) + 33;
      randPass += String.fromCharCode(charCode);
    }
    setGeneratedPass(randPass);
  }

  function toPassField() {
    setPassInputValue(generatedPass);
  }

  function handleToggleGenPass(event) {
    const isChecked = event.target.checked;
    setToGenPass(isChecked);
    
    if (!isChecked) {
      setGeneratedPass("");
    }
  }

  return (
    <>
    <div className="sectionOne">
      <h1>Menedżer haseł - wykonała: Wiktoria Kędzior</h1>
      <form
      action={fillIn}
      >
        <div className="form-group m-4">
          <label 
          htmlFor="inputEmail"
          className="form-label d-block text-start"
          >
            Adres WWW
          </label>
          <input 
          name="inputEmail"
          type="email" 
          className="form-control" 
          id="inputEmail" 
          placeholder="Adres strony WWW"
          />
        </div>
        <div className="form-group m-4">
          <label 
          htmlFor="inputLogin"
          className="form-label d-block text-start"
          >
            Login:
          </label>
          <input 
          name="inputLogin"
          type="text" 
          className="form-control" 
          id="inputLogin" 
          placeholder="Twój login"
          />
        </div>
        <div className="form-group m-4">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              type="checkbox"
              role="switch"
              id="checkBoxGeneratePass"
              className="form-check-input"
              checked={toGenPass}
              onChange={handleToggleGenPass}
            />
            <label 
              htmlFor="checkBoxGeneratePass" 
              className="form-check-label mb-0"
            >
              Wygeneruj hasło
            </label>
            {toGenPass &&
              <button
              type="button"
              className="btn btn-primary m-2 d-block text-start"
              onClick={() => generatePassword()}
              >
                Wygeneruj hasło
              </button>
            }
          </div>
        {toGenPass && generatedPass &&
        <div
        className="d-block text-start"
        >
          <p>Podgląd hasła: {generatedPass}</p>
          <button
              type="button"
              className="btn btn-primary m-2 d-block text-start"
              onClick={() => toPassField()}
              >
                Zastosuj hasło
              </button>
        </div>
        }
        </div>
        <div className="form-group m-4">
          <label 
          htmlFor="inputPass"
          className="form-label d-block text-start"
          >
            Hasło
          </label>
          <input 
            name="inputPass"
            type={passSeen ? "text" : "password"}
            className="form-control" 
            id="inputPass" 
            value={passInputValue}
            disabled={toGenPass}
            onChange={(e) => setPassInputValue(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-start gap-2 my-4">
          <button 
          type="submit" 
          className="btn btn-primary m-2"
          >
            Zapisz
          </button>
          <button 
          type="button" 
          className="btn btn-primary m-2"
          onClick={() => setPassSeen(!passSeen)}
          >
            {passSeen ? "Ukryj hasło" : "Pokaż hasło"}
          </button>
        </div>
      </form>
    </div>
    <div className="sectionTwo">
      <p
      className="m-4 parOne p-2 text-primary lead d-block text-start"
      >
        Adres: {email}
      </p>
      <p
      className="m-4 parTwo p-2 d-block text-start"
      >
        Login: {login}
      </p>
      <p
      className="m-4 parThree p-2 d-block text-start"
      >
        Hasło: {pass}
      </p>
    </div>
    </>
  )
}

export default App
