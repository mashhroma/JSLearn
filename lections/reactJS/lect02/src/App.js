import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import Show from './components/Visible';
import Timer from './components/Timer';
import RefExample from './components/RefExample';
import MessageList from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RefExample />
        <Timer />
        <Counter />
        <Show data='текст' />
        <MessageList />
      </header>
    </div>
  );
}

export default App;