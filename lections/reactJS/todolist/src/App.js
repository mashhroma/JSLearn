import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { FilterProvider } from "./contexts/FilterContext";

function App() {
  return (
    <FilterProvider>
      <AddTodo />
      <TodoFilter />
      <TodoList />
    </FilterProvider>
  );
}

export default App;
