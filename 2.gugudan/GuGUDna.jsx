const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.floor(Math.random() * 9));
  const [second, setsecond] = useState(Math.floor(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

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
      <div>
        {first} 곱하기 으하하 {second}
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입략</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
