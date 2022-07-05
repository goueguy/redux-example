import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import {TodoListStore} from './components/TodoList';

function App() {
  return (
     <Provider store={store}>
        <TodoListStore/>
    </Provider>
  );
}

export default App;
