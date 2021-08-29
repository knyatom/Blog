/* eslint-disable */

import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코드 추천", "강남 우동맛집", "파이션독학"]);
  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState(0);

  let [isClicked, setClicked] = useState("false");

  let [modal, modal변경] = useState(false);

  const 따봉추가 = i => {
    setClicked({ isClicked: "true" });
  };

  function 반복된UI() {
    const 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>Hello</div>);
    }
    return 어레이;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button onClick={() => 글제목변경(["여자 코드 추천", "강남 우동맛집", "리액트독학"])}>
        제목 변경
      </button>

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
      </div>

      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>

        <p>2월 17일 발행</p>
        <hr />
      </div> */}

      {글제목.map(function(글, i) {
        return (
          <div className="list">
            <h3>
              {" "}{글}
              <span key={i} onClick={() => 따봉추가(i)}>
                👍
              </span>{" "}
              {따봉} {isClicked}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달
      </button>
      {modal == true ? <Modal 글제목={글제목} /> : null}

      {반복된UI()}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>
        {props.글제목}
      </h2>
      <p>날자</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
