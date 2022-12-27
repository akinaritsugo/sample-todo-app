import CreateTask from './tasks/CreateTask';
import ListTasks from './tasks/ListTasks';
import './App.css';
import data from './data.json';
import { useEffect, useState } from 'react';

async function loadTasks() {
  return data;
};

async function saveTask() {

};

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      var res = await loadTasks();
      setTasks(res);
    })();
  }, [])

  var onAdd_task = function (task) {
    setTasks([...tasks, task]);
  };

  var onDelete_task = function (task) {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  return (
    <div className="container">
      <header className='my-4'>
        <h1><i className='fas fa-tasks me-2' /> Todo App</h1>
      </header>
      <main>
        <div>
          <CreateTask
            onAdd={(task) => onAdd_task(task)}
          />
        </div>
        <div>
          <ListTasks
            tasks={tasks}
            onDelete={(task) => onDelete_task(task)}
          />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
