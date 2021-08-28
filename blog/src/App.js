/* eslint-disable */

import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코드 추천", "강남 우동맛집", "파이션독학"]);
  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button onClick={() => 글제목변경(["여자 코드 추천", "강남 우동맛집", "리액트독학"])}>
        제목 변경
      </button>

      <div className="list">
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
        <h3>
          {글제목[1]}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>
          {글제목[2]}
        </h3>

        <p>2월 17일 발행</p>
        <hr />
      </div>

      {글제목.map(글 =>
        <div className="list">
          <h3>
            {글}
          </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
      )}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달
      </button>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날자</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
