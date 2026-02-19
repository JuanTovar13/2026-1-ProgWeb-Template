import { useState } from 'react';
import './List.css';

export const List = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { id: Date.now(), text };
    setTasks((preview) => [...preview, newTask]);
    setText('');
  };

  const deleteTask = (id) => {
    setTasks((preview) => preview.filter((task) => task.id !== id));
  };

  return (
    <div className="listaDeTareas">
      <div className="header">
        <input
          type="text"
          placeholder="Ingresa una tarea"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button onClick={addTask}>Añadir</button>
      </div>
      <div className="itemList">
        {tasks.map((task) => (
          <p className="lista" key={task.id}>
            <span className="item">{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};
