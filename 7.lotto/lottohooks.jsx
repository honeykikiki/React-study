// import React, { Component } from "react";
import React, { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
const Lotto = memo(() => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeOuts = useRef([]);

  const runTimeOut = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeOuts.current[i] = setTimeout(() => {
        setWinBalls((prevState) => [...prevState, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeOuts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  useEffect(() => {
    //ajax
  }, []);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted) {
      mounted.current = true;
    } else {
      //ajax
    }
  }, []);
  //componentDidMount X componentDidUpdate에서만

  useEffect(() => {
    console.log(useEffect);
    runTimeOut();
    return () => {
      timeOuts.current.map((v) => {
        clearInterval(v);
      });
    };
  }, [timeOuts.current]); // 빈매열이면  componentDidMount ㄷ똑같다
  // 벼열의 요소가 있으면 componentDidMount값과 componentDidUpdate 둘다수행

  useEffect(() => {
    console.log("로또 숫자를 생성합니다.");
  }, [winNumbers]);

  // useEffect(() => {
  //   runTimeOut();
  //   if (winBalls.length === 0) {
  //     runTimeOut();
  //   }
  //   return () => {
  //     timeOuts.current.map((v) => {
  //       clearInterval(v);
  //     });
  //   };
  // }, []);

  const onClickRedo = useCallback(() => {
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeOuts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨숫자</div>
      <div>
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />}
      {redo && <button onClick={onClickRedo}>한번더</button>}
    </>
  );
});

// class Lotto extends Component {
//   state = {
//     winNumbers: getWinNumbers(), // 당첨 숫자들
//     winBalls: [],
//     bonus: null, // 보너스 공
//     redo: false,
//   };

//   timeOuts = [];

//   componentDidMount() {
//     this.runTimeOut();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.winBalls.length === 0) {
//       this.runTimeOut();
//     }
//   }

//   componentWillUnmount() {
//     this.timeOuts.forEach((v) => {
//       clearInterval(v);
//     });
//   }

//   render() {
//     const { winBalls, bonus, redo } = this.state;
//   }
// }

export default Lotto;
