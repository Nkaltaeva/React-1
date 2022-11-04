import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello, {props.myName} </h3>
      </header>
    </div>
  );
}

export default App;