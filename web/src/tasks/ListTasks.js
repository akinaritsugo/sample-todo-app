import { useState } from "react";

function Task({ data, onDelete = f => f }) {
  const [taskTitle, setTaskTitle] = useState(data.title);

  var onClick_deleteButton = function (event) {
    onDelete(data);
  };

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
        onClick={(e) => onClick_deleteButton(e)}
      >
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

function ListTasks({ tasks, onDelete = f => f }) {
  return (
    <>
      {
        tasks.map((item, index) => (
          <Task
            key={item.id}
            data={item}
            onDelete={onDelete}
          />
        ))
      }
    </>
  );
};

export default ListTasks;