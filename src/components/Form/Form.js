import React from 'react';
//needs to be dummy components to share props
const Form = (data) => {
  return (
    <form>
      <div className='input-group mb-3'>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={data.handleInputChange}
          value={data.name}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='song'>song</label>
        <input
          type='text'
          name='song'
          id='song'
          onChange={data.handleInputChange}
          value={data.song}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='game'>game</label>
        <input
          type='text'
          name='game'
          id='game'
          onChange={data.handleInputChange}
          value={data.game}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='movie'>movie</label>
        <input
          type='text'
          name='movie'
          id='movie'
          onChange={data.handleInputChange}
          value={data.movie}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='food'>food</label>
        <input
          type='text'
          name='food'
          id='food'
          onChange={data.handleInputChange}
          value={data.food}
        ></input>
      </div>
      <div className='input-group-append'>
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={data.handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
