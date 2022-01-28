import React from 'react';
import {TodoItem} from "./my components/TodoItem";

export const Todos = (props) => {
  return(
    <div className="container">
      <h3 className="text-centre">Todos List</h3>
     < TodoItem todos={props.todos[1]}/>
    </div>
  )
};
