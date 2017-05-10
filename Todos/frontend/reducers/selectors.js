
export const getAllTodos = (state) => (
	Object.keys(state.todos).map(id => {
    return state.todos[id];
  })
);
