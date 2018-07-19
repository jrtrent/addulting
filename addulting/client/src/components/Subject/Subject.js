import React from 'react';

const Subject = props => {
    const { topic, text } = props;
    return (
      <li
        onClick={() => props.deleteSubject(text)}
        style={{
          cursor: 'pointer'
        
        }}
      >
        {text}
      </li>
    );
  };
  
  export default Subject;