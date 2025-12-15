function AppHeader({ onFontSizeChange }) {
  return (
    <div
      style={{
        backgroundColor: "#2d2d30ff", 
        padding: "15px 20px",
        borderBottom: "2px solid #a7daf1ff"
      }}
    >
      
        <div>
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
            color: "#e9edf0ff",       
            fontFamily: "Time New Roman"
               
          }}
        >
          Tra My
        </h2>
      </div>

      
      <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
        <button
          style={{ fontSize: "14px", padding: "6px 10px", cursor: "pointer" }}
          onClick={() => onFontSizeChange("small")}
        >
          A
        </button>
        <button
          style={{ fontSize: "18px", padding: "6px 10px", cursor: "pointer" }}
          onClick={() => onFontSizeChange("medium")}
        >
          A
        </button>
        <button
          style={{ fontSize: "24px", padding: "6px 10px", cursor: "pointer" }}
          onClick={() => onFontSizeChange("large")}
        >
          A
        </button>
      </div>
    </div>
  );
}

export default AppHeader;