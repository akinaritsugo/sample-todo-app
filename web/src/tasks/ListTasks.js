import { useState } from "react";

function Task({ data, onDelete = f => f }) {
  const [taskTitle, setTaskTitle] = useState(data.title);

  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
      </div>
      <input type="text" className="form-control" aria-label="Text input with checkbox"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
      >
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

function ListTasks({ tasks = [], onDelete = f => f }) {
  return (
    <>
      {
        tasks.map((item, index) => (
          <Task
            key={item.id}
            data={item}
          />
        ))
      }
    </>
  );
};

export default ListTasks;