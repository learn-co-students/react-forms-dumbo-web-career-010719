import React from 'react'

class ControlledInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
      </form>
    )
  }
}

export default ControlledInput
