const { useState } = require("react");
const React = require("react");
const { Component, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("허성진");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("떙");
      setValue("");
      inputRef.current.focus();
    }
  };

  onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="word-Input"></label>
        <input
          id="word-Input"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChange}
          type="text"
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

// class WordRelay extends React.Component {
//   state = {
//     word: "허성진",
//     value: "",
//     result: "",
//   };
//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         result: "정답",
//         word: this.state.value,
//         value: "",
//       });
//       this.input.focus();
//     } else {
//       this.setState({
//         result: "땡",
//         value: "",
//       });
//       this.input.focus();
//     }
//   };

//   onChange = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   input;
//   onRef = (c) => {
//     this.input = c;
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input ref={this.onRef} value={this.state.value} onChange={this.onChange} type="text" />
//           <button>입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

module.exports = WordRelay;
