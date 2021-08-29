/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코드 추천", "강남 우동맛집", "파이션독학"]);
  let posts = "강남 고기 맛집";

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);

  function 제목바꾸기() {
    // 글제목변경(['여자 코드 추천','강남 라면맛집','엑셀독학']);
    var newArray = [...글제목]; // deepCopy
    newArray[0] = "여자코드 추천";
    newArray[2] = "리액트 실습";
    글제목변경(newArray);
  }

  function 따봉변경하기(i) {
    let newA = [...따봉];
    newA[i] = newA[i] + 1;
    따봉변경(newA);
    console.log(따봉);
  }

  function 정렬하기() {
    var newArray = [...글제목];
    const sortArray = newArray.sort();
    글제목변경(sortArray);
    console.log(sortArray);
  }

  function 반복된UI() {
    const 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>Hello</div>);
    }
    return 어레이;
  }

  let [누른제목, 누른제목변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}> 제목 변경</button>
      <button onClick={정렬하기}> 정렬하기</button>

      {/* <button onClick={() => 글제목변경(["여자 코드 추천", "강남 우동맛집", "리액트독학"])}>
        제목 변경
      </button> */}

      {/* <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />

      </div> */}

      {글제목.map((글, i) =>
        <div className="list" key={글}>
          <h3
            onClick={() => {
              누른제목변경(i);
            }}
          >
            {" "}  {글}
            <span
              onClick={() => {
                따봉변경하기(i);
              }}
            >
              {" "} 👍 {" "}
            </span>
            {따봉[i]}
          </h3>
          <p> 2월 17일 발행 </p>
          <hr />
        </div>
      )}

      <button
        onClick={() => {
          누른제목변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른제목변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른제목변경(2);
        }}
      >
        버튼3
      </button>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        {" "}모달{" "}
      </button>

      {modal == true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>
        {props.글제목[props.누른제목]}
      </h2>
      <p>날자</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
