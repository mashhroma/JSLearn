import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Article name='Alex' />
      <Links title={'my life'} number={'22'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Article(probs) {
  return (
    <div>
      <h2>Читать про</h2>
      <a href="#">{probs.name}</a>
    </div>
  );
}

function Links({ title, number }) {
  return (
    <div>
      <h2>{title}</h2>
      <a href="#">{number}</a>
    </div>
  );
}

export default App;
