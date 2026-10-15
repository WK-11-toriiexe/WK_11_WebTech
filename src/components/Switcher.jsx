import { useState } from "react";

function Switcher(){

  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        Zmień
      </button>

      <p>Stan active: {active ? "true" : "false"}</p>
    </div>
  );
}

export default Switcher;