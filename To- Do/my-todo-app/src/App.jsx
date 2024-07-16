import React from 'react';
import TodoApp from './components/TodoApp';
import CalendarComponent from './components/Calender';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-20 mt-20">To-Do App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TodoApp />
        <CalendarComponent />
      </div>
    </div>
  );
}

export default App;
