import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Checking server status...");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Server is NOT running"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      {message}
    </div>
  );
}

export default App;
