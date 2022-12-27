import './App.css';
import CreateTask from './tasks/CreateTask';

function App() {
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
        </div>
      </main>
    </div>
  );
}

export default App;
