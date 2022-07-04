import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import TodoList from './components/TodoList';

function App() {
  return (
     <Provider store={store}>
        <div className="App">
          <TodoList/>
        </div>
    </Provider>
  );
}

export default App;
