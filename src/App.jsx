import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [toGenPass, setToGenPass] = useState(true);
  const [generatedPass, setGeneratedPass] = useState('');
  const [passInputValue, setPassInputValue] = useState('');
  const [passSeen, setPassSeen] = useState(false);

  const [inputs, setInputs] = useState({
    adres: '',
    login: '',
    haslo: '',
    czyGenerowane: false,
    czyZastosowano: false,
  });

  const handleSubmit = (formData) => {
    const dane = {
      adres: formData.get('adres') || '',
      login: formData.get('login') || '',
      haslo: formData.get('haslo') !== null ? formData.get('haslo') : passInputValue,
      czyGenerowane: formData.get('wygeneruj') === 'on',
      czyZastosowano: toGenPass && passInputValue !== '',
    };

    setInputs(dane);
  };

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
      setGeneratedPass('');
    }
  }

  return (
    <>
      <div className="sectionOne">
        <h1>Menedżer haseł - wykonała: Wiktoria Kędzior</h1>

        <div className="d-flex flex-wrap align-items-start">
          <form action={handleSubmit} className="flex-grow-1">
            <div className="form-group m-4">
              <label htmlFor="adres" className="form-label d-block text-start">
                Adres WWW:
              </label>
              <input
                type="text"
                name="adres"
                id="adres"
                className="form-control"
                placeholder="Adres strony WWW"
                defaultValue={inputs.adres}
              />
            </div>

            <div className="form-group m-4">
              <label htmlFor="login" className="form-label d-block text-start">
                Login:
              </label>
              <input
                type="text"
                name="login"
                id="login"
                className="form-control"
                placeholder="Twój login"
                defaultValue={inputs.login}
              />
            </div>

            <div className="form-group m-4">
              <div className="form-check d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  name="wygeneruj"
                  id="wygeneruj"
                  className="form-check-input"
                  checked={toGenPass}
                  onChange={handleToggleGenPass}
                />
                <label htmlFor="wygeneruj" className="form-check-label mb-0">
                  Wygeneruj hasło
                </label>

                {toGenPass && (
                  <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={generatePassword}
                  >
                    Generuj hasło
                  </button>
                )}
              </div>
            </div>

            <div className="form-group m-4">
              <label htmlFor="haslo" className="form-label d-block text-start">
                Hasło:
              </label>
              <input
                type={passSeen ? 'text' : 'password'}
                name="haslo"
                id="haslo"
                className="form-control"
                value={passInputValue}
                disabled={toGenPass}
                onChange={(e) => setPassInputValue(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-start gap-2 m-4">
              <button type="submit" className="btn btn-primary">
                Zapisz
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPassSeen(!passSeen)}
              >
                {passSeen ? 'Ukryj hasło' : 'Pokaż hasło'}
              </button>
            </div>
          </form>

          {toGenPass && generatedPass && (
            <div className="m-4 p-3 border rounded text-start">
              <h5>Podgląd wygenerowanego hasła</h5>
              <p className="font-monospace">{generatedPass}</p>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!generatedPass}
                onClick={toPassField}
              >
                Zastosuj hasło
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="sectionTwo">
        <p className="m-4 parOne p-2 text-primary lead d-block text-start">
          Adres: {inputs.adres}
        </p>
        <p className="m-4 parTwo p-2 d-block text-start">
          Login: {inputs.login}
        </p>
        <p className="m-4 parThree p-2 d-block text-start">
          {inputs.czyGenerowane && !inputs.czyZastosowano
            ? 'Hasło automatycznie generowane'
            : `Hasło: ${inputs.haslo}`}
        </p>
      </div>
    </>
  );
}