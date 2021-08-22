
import React,{useState} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let [글제목,글제목변경]=useState('남자 코드 추천');
  let [글제목2,글제목변경]=useState('여자 코드 추천');

  // 이 함수를 실행하면 array가 생성된다.
  // ES6 destructuring 문법
  // var [a,b]=[10,100];

  let posts="강남 고기 맛집";
    
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts}> 개발 Blog</div>
      </div>
      <div className="list">
        <h3>{posts}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목2}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );  
}

export default App;
