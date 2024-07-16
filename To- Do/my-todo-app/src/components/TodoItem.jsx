import React from 'react';

function TodoItem({ task, index, deleteTask, toggleComplete }) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span 
        className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`} 
        onClick={() => toggleComplete(index)}
      >
        {task.text} (Added on: {task.date.toLocaleDateString()})
      </span>
      <button
        onClick={() => deleteTask(index)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
