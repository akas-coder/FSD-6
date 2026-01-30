import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Starting server...");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessage("Server is running!");
    }, 6000);

    
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      {message}
    </div>
  );
}

export default App;
