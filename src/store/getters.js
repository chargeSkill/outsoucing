export default {
    doneTodosCount: state => {
      return state.todolist[state.index].list.filter(todo => todo.done).length;
    }
}