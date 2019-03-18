import React from 'react'

class Form extends React.Component{
  state = {
    firstName: "John",
    lastName: "Oncher"
  }

  handleChange = event => {
    this.setState({

      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <form>
          <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
          <select>
            <option value="stuff">stuff</option>
            <option value="other stuff"> other stuff</option>
          </select>
      </form>
    )
  }
}

export default Form
