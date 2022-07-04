import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';
/* eslint-disable */ 
export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    setTodos(todos.filter((el) => el.id !== id));
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
  //  let data = todos
   const data = [...todos];

    for (let index = 0; index < data.length; index++) {
      if (id === data[index]?.id) {
         console.log('Hello',data);
         data[index].checked=true
        // setTodos(todos[index].checked=true)
         return setTodos(data);
        //  todos[index].checked=!todos[index].checked
      }     
    }
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
