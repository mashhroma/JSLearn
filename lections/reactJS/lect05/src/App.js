import React, { createContext, useContext, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const ThemeContext = createContext();
const NotesContext = createContext();

const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <ul>
      {notes.map((note, index) => {
        return <li key={index}>{note}</li>
      })}
    </ul>
  );
};

const NoteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Добавить</button>
    </div>
  )
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Нажми, чтобы переключить тему на {theme === 'light' ? 'темную' : 'светлую'}</button>
  )
}

const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const newProps = {...props, styles};
    return <WrappedComponent {...newProps} />;
  };
};

const Button = ({styles}) => {
  return (
    <button style={styles}>Click me</button>
  );
};

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count+1);
    };

    const newProps = {
      count,
      incrementCount,
      ...props
    };

    return <WrappedComponent {...newProps} />;
  };
};

const ClickCounter = ({count, incrementCount, message}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  )
}

const ClickCounterWithCounter = withCounter(ClickCounter);

const Button1 = withStyles(Button, { background: 'blue', color: 'white' });
const Button2 = withStyles(Button, { background: 'green', color: 'white' });

const App = () => {
  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState(['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4']);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };


  return (
    <ThemeContext.Provider value={ {theme, toggleTheme} }>
      <NotesContext.Provider value={ {notes, addNote} }>
        <div className='content' style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black' }}>
          <h1>Список</h1>
          <ThemeToggle />
          <NotesList />
          <NoteInput />
          <Button1 />
          <Button2 />
          <ClickCounterWithCounter message='Счетчик из компонента высшего порядка' />
        <Provider store={store}>
          <Counter />
        </Provider>
        </div>
      </NotesContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
