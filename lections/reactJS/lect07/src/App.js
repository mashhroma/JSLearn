import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Ex2Button from './ex2Button';
import ThunkComponent from './ThunkEx4';
import SagaButton from './SagaButton';
import FetchButtonEx3 from './FetchButtonEx3';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'TEST_ACTION' });
  }, [dispatch]);

  return (
    <div className="example">
      <div>Необходимо открыть консоль, чтобы увидеть результат работы.</div>
      <Ex2Button />
      <FetchButtonEx3 />
      <ThunkComponent />
      <SagaButton />
    </div>
  );
}

export default App;
