import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './tasks/CreateTask';
import ListTasks from './tasks/ListTasks';
import DATA from './data.json';

async function loadTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DATA);
    }, 100);
  });
};

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      var res = await loadTasks();
      setTasks(res);
    })();
  }, []);

  return (
    <div className="container">
      <header className='my-4'>
        <h1><i className='fas fa-tasks me-2' /> Todo App</h1>
      </header>
      <main>
        <div>
          <CreateTask
          />
        </div>
        <div>
          <ListTasks
            tasks={tasks}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
