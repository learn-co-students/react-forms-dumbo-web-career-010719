// Code ControlledInput Component Here
import React from 'react'

class Form extends React.Component{

  state={
    firstName:"Vincent",
    lastName:"Valentino",
    value: "lime"
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    console.log("hi");
    // this.doSomethingWithData(this.state) placeholder function
  }

  changeName = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange = e =>{
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={e=>this.handleSubmit(e)}>
        Name: <input type="text" id="First" name="firstName" value={this.state.firstName} onChange={e=>this.changeName(e)}></input>
        Surname: <input type="text" id="Last" name="lastName" value={this.state.lastName} onChange={e=>this.changeName(e)}></input>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="textarea" placeholder="I'm a text area"></input>
        Check Me Out: <input type="checkbox"></input>
        <input type="radio"></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form
