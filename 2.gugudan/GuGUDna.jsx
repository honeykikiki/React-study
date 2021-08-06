const React = require("react");
const { Component } = React;

class GuGudDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.floor(Math.random() * 9),
      second: Math.floor(Math.random() * 9),
      value: "",
      result: "",

      liked: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevValue) => {
        return {
          result: "정답 : " + prevValue.value,
          first: Math.floor(Math.random() * 9),
          second: Math.floor(Math.random() * 9),
          value: "",
        };
      });
      this.input.focus();
    } else {
      this.setState({
        result: "떙",
        value: "",
      });
      this.input.focus();
    }
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  likeClick = (e) => {
    this.setState({ liked: true });
  };
  input;
  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.first}곱하기{this.state.second}는?{" "}
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">제출</button>
        </form>
        <div>{this.state.result}</div>
        <button type="submit">{this.state.liked ? "liked" : "like"}</button>
      </React.Fragment>
    );
  }
}

module.exports = GuGudDan;
