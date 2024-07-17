import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from '../store/apis/todosApi'

const TodoApp = () => {

  const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);

  const { data: todo } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if (todoId == 1)
      return;
    setTodoId(todoId - 1);
  }

  return (
    <>
        <h1>Todo App - RTK Query</h1>
        <hr />
        <h4>isLoading ... { isLoading ? 'True' : 'False'}</h4>
        <pre>...</pre>
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>
                {todo.title}
              </li>
            ))
          }
        </ul>

          <hr />
          <h2>Todo By Id {todoId}</h2>
          <h4>{JSON.stringify(todo)}</h4>

          <button onClick={ prevTodo }>Prev Todo</button>
          <button onClick={ nextTodo }>Next Todo</button>
    </>
  )
}

export default TodoApp