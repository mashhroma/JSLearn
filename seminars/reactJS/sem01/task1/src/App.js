import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <CurrentTime />
        <EventCard name={'Название 1'} date={'11.05.1985'} place={'Дача'} />
        <EventCard name={'Название 2'} date={'11.05.1985'} place={'Дача'} />
        <EventCard name={'Название 3'} date={'11.05.1985'} place={'Дача'} />
        <EventCard name={'Название 4'} date={'11.05.1985'} place={'Дача'} />
      </header>
    </div>
  );
}

export default App;
