import './App.css';
import Counter from './counter/counter';
import ProductList from './api/productList';
import Todo from './Todo/todo';

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <hr/>
      <ProductList/> */}
      <Todo/>
    </div>
  );
}

export default App;




//npx create-react-app app-name