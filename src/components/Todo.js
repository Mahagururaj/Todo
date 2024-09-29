import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  // State to manage the background color of the task item
  const [bgColor, setBgColor] = useState('');

  // Function to handle background color toggle on click
  const handleColorChange = () => {
    setBgColor((prevColor) => (prevColor === 'green' ? '' : 'green'));
  };

  return (
    <div className="Todo" style={{ backgroundColor: bgColor }}  onClick={() => {
      handleColorChange(); 
    }}>
      <p
        className=""
        onClick={() => {
          toggleComplete(task.id);
        }}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
