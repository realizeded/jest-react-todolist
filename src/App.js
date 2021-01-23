import React from 'react';
import TodoList from './pages/TodoList/TodoList';
import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
    <div className="App" data-test="app">
        <Provider store={store}>
          <TodoList/>
        </Provider>
    </div>
  );
}

export default App;
