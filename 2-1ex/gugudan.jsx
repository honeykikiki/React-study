const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = React.useState(Math.floor(Math.random() * 9));
  const [second, setsecond] = React.useState(Math.floor(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답 : " + value);
      setFirst(Math.floor(Math.random() * 9));
      setsecond(Math.floor(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("떙");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1>바로 리프레쉬 된다 ㅇ으하하</h1>
      <div>
        {first} 곱하기 {second}
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>빨리 입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
