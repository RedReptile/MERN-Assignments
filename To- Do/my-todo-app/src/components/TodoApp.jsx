import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, date: new Date(), completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-3">To-Do List</h2>
      <div className="flex mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 flex-grow rounded-l"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Add Task
        </button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default TodoApp;
