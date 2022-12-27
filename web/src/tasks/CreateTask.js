import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function CreateTask({ onAdd = f => f }) {
  const [taskName, setTaskName] = useState("");
  
  var onChange_taskNameText = function (event) {
    var text = event.target.value;
    setTaskName(text);
  };

  var onClick_addButton = function (event) {
    var data = {
      id: uuid(),
      title: taskName,
      created: (new Date()).toISOString()
    };
    onAdd(data);
    setTaskName("");
  };

  return (
    <form>
      <div className="mb-3 row">
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={(e) => onChange_taskNameText(e)}
          />
        </div>
        <div className='col-sm-2'>
          <input
            type='button'
            className='btn btn-outline-primary'
            value='追加'
            onClick={(e) => onClick_addButton(e)}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateTask