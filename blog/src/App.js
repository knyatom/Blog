
/* eslint-disable */

import React,{useState} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let [글제목,글제목변경]=useState(['남자 코드 추천','강남 우동맛집','파이션독학']);  
  let posts="강남 고기 맛집";
  let [따봉,따봉변경]=useState(0);     

  function 제목바꾸기(){
   // 글제목변경(['여자 코드 추천','강남 라면맛집','엑셀독학']);
   var newArray=[...글제목];  // deepCopy
    newArray[0]='여자코드 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>
      제목 변경</button>
      <div className="list">
        <h3>{글제목[0]} 
          <span onClick={ ()=>{따봉변경(따봉+1)} } >👍</span> {따봉} 
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
      </div>      
    </div>
  );  
}

export default App;
