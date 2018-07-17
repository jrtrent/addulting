import React from "react";
import Todo from './Todo';





const TodoList = props =>(
            <ul>
                    {props.myTodos.map((todo, idx) =>{
                        const {text, isDone} =todo;
                    return (
                        <Todo
                        key={`${todo}-${idx}`}
                        text={text}
                        updateTodoStatus={props.updateTodoStatus}
                        status={isDone}
                        
                       
                        />
                    );
                })}
            </ul>
);
 
 export default TodoList;