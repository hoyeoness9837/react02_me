import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {

  //state with default values
  state = {
    name: '',
    song: '',
    game: '',
    movie: '',
    food: '',
    users: [],
  };




  handleInputChange = (event) => {
    this.setState({

      //event.target.name equal to the input values.
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //to duplicate the same users array as state.
    let users = JSON.parse(JSON.stringify(this.state.users));

    // we push submitted data from other componets to the user array
    users.push({
      name: this.state.name,
      movie: this.state.movie,
      song: this.state.song,
      food: this.state.food,
      game: this.state.game,
    });

    // with that pushed data, we update the state. and clears out the inputs
    this.setState({
      users,
      name: '',
      movie: '',
      song: '',
      food: '',
      game: '',
    });
  };

  render() {
    //start these two components to share their properties with App components
    return (
      <>
        <Form
          name={this.state.name}
          song={this.state.song}
          game={this.state.game}
          movie={this.state.moivie}
          food={this.state.food}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.users.map((user) => (
          <Card user={user} />
        ))}
      </>
    )
  }
}

export default App;
