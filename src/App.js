import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import store from './store';
// const store = createStore(()=>{}, {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>ToDos</h1>
          <PostForm />
          <Post />
        </header>
      </div>
    </Provider>
  );
}

export default App;
