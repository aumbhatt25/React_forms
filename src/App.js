import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  }
  const formHandler = (event) => {
    event.preventDefault();

    if(input === ''){
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }
  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input type="text" onChange={inputChangeHandler} value={input}></input>
        {!isValid && <p>Input is required!</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
