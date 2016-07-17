let sum = 0;
export const addTodo = () => {
  return {
    type: 'ADD_TODO',
    sum: sum++
  };
};

export const inputTodo = (text) => {
  return {
    type: 'INPUT_TODO',
    text
  };
};
