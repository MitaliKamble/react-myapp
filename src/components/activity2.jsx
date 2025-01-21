import React, { Component } from "react";

class InputDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // Initial state for the input value
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value }); // Update state with the input value
  };

  render() {
    return (
      <div>
        <h1>React Class Component Form</h1>
        <form>
          <label htmlFor="input">Enter Text:</label>
          <input
            type="text"
            id="input"
            value={this.state.inputValue} // Controlled input
            onChange={this.handleChange} // Update state on input change
          />
        </form>
        <p>
          <strong>Displayed Value:</strong> {this.state.inputValue}
        </p>
      </div>
    );
  }
}

export default InputDisplay;
