export default function todos(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ... state,
        sum: action.sum
      };
    case 'INPUT_TODO':
      return {
        ... state,
        text: action.text
      };
    default:
      return state;
  }
}

