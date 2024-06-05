import { Provider } from "react-redux";
import AddProduct from "./components/AddProduct";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";
import { FilterProvider } from "./contexts/FilterContext";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Управление каталогом продуктов</h1>
        <FilterProvider>
          <AddProduct />
          <h2 className="subtitle">Каталог</h2>
          <ProductFilter />
          <ProductList />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;
