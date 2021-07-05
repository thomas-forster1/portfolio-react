import React, { useEffect, useState } from "react";
import Home from "../pages/Home";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  return (
    <div className={`c-app ${ready ? "-show" : ""}`}>
      <Home />
    </div>
  );
}

export default App;
