import React from 'react';

const Todo = props => {
    const { status, text } = props;
    return (
      <li
        onClick={() => props.updateTodoStatus(text)}
        style={{
          cursor: 'pointer',
          color: status === true ? 'black' : 'red'
        }}
      >
        {text}
      </li>
    );
  };
  
  export default Todo;