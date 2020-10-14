import React ,{useState}from 'react'

function GtState() {
    const [name, setName] = useState("");
    const [history, setHistory] = useState([1]);
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
            setHistory([...history, e.target.value]);
          }}
        />
        {name}
        <hr />
        <br />
        <ul>
          {history.map((item) => (
            <h1>{item}</h1>
          ))}
        </ul>
      </div>
    );
  }
export default GtState
