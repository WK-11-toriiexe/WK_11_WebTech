import { useState } from "react";

function Score() {
    const [score, setScore] = useState(0);

    {/* Wydzielenie buttonStyle 
        do stałej zapobiega powielaniu kodu,
        poprawia czytelność JSX i ułatwia późniejszą zmianę wyglądu 
        wszystkich przycisków w jednym miejscu. 
        
        Z powodu owego wydzielenia, w późniejszych miejscach
        kodu używany jest operator rozproszenia ..., który kopiuje wszystkie
        właściwości znajdujące się w buttonStyle*/}
    const buttonStyle = {
        width: "90px",
        padding: "10px 0",
        border: "none",
        borderRadius: "80px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    };

    return (
        <div
        style={{
            backgroundColor: "#01579B",
            margin: "5%",
            padding: "20px",
            borderRadius: "80px",
            textAlign: "center",
        }}
        >
        <p
            style={{
            backgroundColor: "#B3E5FC",
            color: "#01579B",
            width: "35%",
            margin: "auto",
            marginBottom: "20px",
            borderRadius: "80px",
            }}
        >
            Punkty: {score}
        </p>

        <div
            style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            }}
        >
            <button
            onClick={() => setScore(score + 1)}
            style={{ ...buttonStyle, backgroundColor: "#2E7D32" }}
            >
            +1
            </button>
            <button
            onClick={() => setScore(score + 5)}
            style={{ ...buttonStyle, backgroundColor: "#E65100" }}
            >
            +5
            </button>
            <button
            onClick={() => setScore(score - 1)}
            style={{ ...buttonStyle, backgroundColor: "#C62828" }}
            >
            -1
            </button>
            <button
            onClick={() => setScore(0)}
            style={{ ...buttonStyle, backgroundColor: "#4A148C" }}
            >
            Reset
            </button>
        </div>
        </div>
    );
}

export default Score;