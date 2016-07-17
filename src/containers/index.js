import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo';
// import VisibleTodoList from './VisibleTodoList';
import Devtools from './devtools';

export const App = ({ store }) => (
    <Provider store={store}>
      <div>
        <AddTodo />
        <Devtools />
      </div>
    </Provider>
);
App.propTypes = {
  store: PropTypes.object.isRequired
};
        // <VisibleTodoList />
