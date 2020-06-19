import React from 'react';
//needs to be dummy components to share props
const Card = (person) => {
  return (
    <div className='card border-info mb-3' style={{ maxWidth: '18rem' }}>
      <div className='card-header'>Name: {person.user.name}</div>
      <div className='card-body text-info'>
        <h5 className='card-title'>Favorites</h5>
        <p className='card-text'>Favorite Song: {person.user.song}</p>
        <p className='card-text'>Favorite Game: {person.user.game}</p>
        <p className='card-text'>Favorite Movie : {person.user.movie}</p>
        <p className='card-text'>Favorite Food: {person.user.food}</p>
      </div>
    </div>
  );
};

export default Card;
