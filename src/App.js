import './App.css';
import AppCalculator from "./components/AppCalculator";
import AppHeader from "./components/AppHeader";
import { useState } from 'react';



function App() {
  const [fontSize, setFontSize] = useState("medium");

  const fontSizeMap = {
    small: "12px",
    medium: "16px",
    large: "20px",
  };

  return (
    <div style={{ fontSize: fontSizeMap[fontSize], padding: "20px" }}>
      <AppHeader onFontSizeChange={setFontSize} />
      <AppCalculator />
    </div>
  );
}

export default App;