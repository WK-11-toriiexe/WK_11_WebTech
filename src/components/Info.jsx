import { useState } from "react";

function Info() {

  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Zmień
      </button>

      <p>Stan visible: {visible ? "true" : "false"}</p>
    </div>
  );
}

export default Info;