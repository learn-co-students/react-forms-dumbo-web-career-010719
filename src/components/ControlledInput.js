// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
