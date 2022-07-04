import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

/* eslint-disable */ 


  const handleAddTodo = () => {
    // Fin an ability to add new task
  
    const idValue = todos?.length + 1;
    const data = {
     id: idValue,
     label: task,
     checked: false,
    };
    setTodos((OldValue) => [
      ...OldValue,
      data,
    ]);
  // console.log('Hello', id);
    // setTodos(data);
    setTask('')
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
