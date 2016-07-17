import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, inputTodo } from '../actions';

let AddTodo = ({ dispatch, sum, text }) => {
  const handleClick = function() {
    dispatch(addTodo());
  };
  const handleChange = function (event) {
    const value = event.target.value;
    dispatch(inputTodo(value));
  };
  return (
    <div>
     <h1>累加运算</h1>
      <button onClick = {handleClick.bind(this)}>累加</button>
     <hr />
     <div>运算结果：{sum}</div>

     <h1>表单输入</h1>
      <input type="number" value={text} onChange={handleChange.bind(this)} id="addInput" />
     <hr />
     <div>输入结果：{text}</div>
    </div>
  );
};
AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    sum: state.todos.sum,
    text: state.todos.text
  };
}
AddTodo = connect(mapStateToProps)(AddTodo);

export default AddTodo;
//
// const value = document.getElementById("addInput").value;
