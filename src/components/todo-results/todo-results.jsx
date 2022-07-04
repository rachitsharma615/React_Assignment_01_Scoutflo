import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

/* eslint-disable */ 

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    let count = 0;
    for (let index = 0; index < todos.length; index++) {
      if (todos[index].checked===true) {
         count+=1;
      }     
    }
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
