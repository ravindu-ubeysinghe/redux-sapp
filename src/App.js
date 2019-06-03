import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>ToDos</h1>
          <TodoForm />
          <Todos />
        </header>
      </div>
    </Provider>
  );
}

export default App;
