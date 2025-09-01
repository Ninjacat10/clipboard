import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/clipboard')
      .then((res) => res.json())
      .then((data) => setText(data.text));
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    fetch('http://localhost:3000/clipboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  };

  return (
    <div className="App">
      <h1>Clipboard</h1>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;