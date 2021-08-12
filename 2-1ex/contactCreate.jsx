import React, { Component } from "react";

class contactCreate extends Component {
  state = {
    name: "",
    phone: "",
  };

  onChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  // onChangeOne = (e) => {
  //   this.setState({
  //     phone: e.target.value,
  //   });
  // };

  // onChangeTwo = (e) => {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };

  onClick = () => {
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
    };
    this.props.onCreate(contact);
    this.setState({
      name: "",
      phone: "",
    });
  };

  render() {
    return (
      <>
        <h2>Create Contact</h2>
        <p>
          <input type="text" name="name" placeholder="name" onChange={this.onChange} value={this.state.name} />
          <input type="text" name="phone" placeholder="phone" onChange={this.onChange} value={this.state.phone} />
        </p>
        <button onClick={this.onClick}>Create</button>
      </>
    );
  }
}

export default contactCreate;
