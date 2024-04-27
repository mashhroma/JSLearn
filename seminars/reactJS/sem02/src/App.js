import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TextInput />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
