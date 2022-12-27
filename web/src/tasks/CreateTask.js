function CreateTask({ onAdd = f => f }) {
  return (
    <form>
      <div className="mb-3 row">
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className='col-sm-2'>
          <input
            type='button'
            className='btn btn-outline-primary'
            value='追加'
          />
        </div>
      </div>
    </form>
  );
};

export default CreateTask