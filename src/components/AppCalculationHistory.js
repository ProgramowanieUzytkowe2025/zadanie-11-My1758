function AppCalculationHistory({ history, onSelect }) {
  return (
    <div>
      <h3>Historia obliczeń</h3>

      <table border="1">
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>Operacja</th>
            <th>Wynik</th>
            <th>Akcja</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.operation}</td>
              <td>{item.result}</td>
              <td>
                <button onClick={() => onSelect(index)}>
                  Czytaj
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppCalculationHistory;