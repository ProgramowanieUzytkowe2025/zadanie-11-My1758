import { useEffect, useState } from "react";
import AppActionButton from "./AppActionButton";
import AppCalculationHistory from "./AppCalculationHistory";

function AppCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [compareText, setCompareText] = useState("");
  const [history, setHistory] = useState([]);

  
  useEffect(() => {
    if (a === "" || b === "") {
      setCompareText("");
      return;
    }

    const numA = Number(a);
    const numB = Number(b);

    if (numA > numB)
      setCompareText("Liczba A jest większa od liczby B");
    else if (numA < numB)
      setCompareText("Liczba A jest mniejsza od liczby B");
    else
      setCompareText("Liczba A jest równa liczbie B");
  }, [a, b]);

  const canCalculate = a !== "" && b !== "";

  const calculate = (operation) => {
    const numA = Number(a);
    const numB = Number(b);
    let res;

    if (operation === "/" && numB === 0) {
      setResult("nie można dzielenia 0");
      return;
    }

    switch (operation) {
      case "+": res = numA + numB; break;
      case "-": res = numA - numB; break;
      case "*": res = numA * numB; break;
      case "/": res = numA / numB; break;
      default: return;
    }

    setResult(res);
    setHistory([...history, { a: numA, b: numB, operation, result: res }]);
  };

  const handleHistorySelect = (index) => {
    const item = history[index];
    setA(item.a);
    setB(item.b);
    setResult(item.result);
    setHistory(history.slice(0, index));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#9ebdf7ff",
        border: "2px solid #ccc",
        borderRadius: "10px"
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Kalkulator</h3>

      
      <div style={{ marginBottom: "10px" }}>
        <label>A: </label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>B: </label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      
      <div style={{ marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
        <AppActionButton label="+" onClick={() => calculate("+")} disabled={!canCalculate} />
        <AppActionButton label="-" onClick={() => calculate("-")} disabled={!canCalculate} />
        <AppActionButton label="*" onClick={() => calculate("*")} disabled={!canCalculate} />
        <AppActionButton label="/" onClick={() => calculate("/")} disabled={!canCalculate} />
      </div>

      
      <div style={{
        padding: "15px",
        backgroundColor: "#b1d3f7ff", 
        borderRadius: "8px",
        border: "1px solid #eaf0f5ff"
      }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Wynik: </label>
          <input type="text" value={result} readOnly style={{ width: "100%" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Porównanie: </label>
          <input type="text" value={compareText} readOnly style={{ width: "100%" }} />
        </div>

        <AppCalculationHistory
          history={history}
          onSelect={handleHistorySelect}
        />
      </div>
    </div>
  );
}

export default AppCalculator;