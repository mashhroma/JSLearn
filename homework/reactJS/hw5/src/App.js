import { Provider } from 'react-redux';
import store from './store';
import ThemeToggle from './ToggleTheme';

function App() {
  return (
    <Provider store={store}>
      <ThemeToggle>
        <div className="App">
          <h1>Список</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est libero temporibus, reprehenderit perferendis, fuga minima id quisquam excepturi neque distinctio harum blanditiis illum recusandae animi reiciendis sunt. Eaque aperiam, deleniti dolores quisquam itaque vel inventore molestiae rem sequi fuga obcaecati facilis ratione praesentium temporibus ea dicta, sapiente asperiores! Rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est libero temporibus, reprehenderit perferendis, fuga minima id quisquam excepturi neque distinctio harum blanditiis illum recusandae animi reiciendis sunt. Eaque aperiam, deleniti dolores quisquam itaque vel inventore molestiae rem sequi fuga obcaecati facilis ratione praesentium temporibus ea dicta, sapiente asperiores! Rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est libero temporibus, reprehenderit perferendis, fuga minima id quisquam excepturi neque distinctio harum blanditiis illum recusandae animi reiciendis sunt. Eaque aperiam, deleniti dolores quisquam itaque vel inventore molestiae rem sequi fuga obcaecati facilis ratione praesentium temporibus ea dicta, sapiente asperiores! Rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est libero temporibus, reprehenderit perferendis, fuga minima id quisquam excepturi neque distinctio harum blanditiis illum recusandae animi reiciendis sunt. Eaque aperiam, deleniti dolores quisquam itaque vel inventore molestiae rem sequi fuga obcaecati facilis ratione praesentium temporibus ea dicta, sapiente asperiores! Rerum.</p>
        </div>
      </ThemeToggle>
    </Provider>
  );
}

export default App;
