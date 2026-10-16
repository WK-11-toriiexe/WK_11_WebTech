import { useState } from "react";

function Lamp() {
    const [active, setActive] = useState(false);

    return (
        <div
        style={{
            backgroundColor: active ? "#FFF8E1" : "#263238",
            margin: "5%",
            padding: "20px",
            borderRadius: "80px",
            textAlign: "center",
            transition: "all 0.3s ease",
        }}
        >
        <p
            style={{
            backgroundColor: active ? "#FFE082" : "#37474F",
            color: active ? "#E65100" : "#ECEFF1",
            width: "35%",
            margin: "auto",
            marginBottom: "20px",
            padding: "10px 0",
            borderRadius: "80px",
            fontWeight: "bold",
            }}
        >
            Stan: {active ? "Włączona" : "Wyłączona"}
        </p>

        <button
            onClick={() => setActive(!active)}
            style={{
            width: "120px",
            padding: "10px 0",
            border: "none",
            borderRadius: "80px",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: active ? "#E65100" : "#2E7D32",
            }}
        >
            Zmień stan
        </button>
        </div>
    );
}

export default Lamp;