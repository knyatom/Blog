
/* eslint-disable */

<<<<<<< HEAD
import React, { useState } from "react";


function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코드 추천",
    "강남 우동맛집",
    "파이션독학",
  ]);
  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState(0);

  let [isClicked, setClicked]=useState([false,false,false]);
 
  let [modal, modal변경] = useState(false);
=======
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
    newArray[2]='리액트 실습';
    글제목변경(newArray);
  }
  function 정렬하기(){
    var newArray=[...글제목];  
    const sortArray= newArray.sort();
    글제목변경(sortArray);
    console.log(sortArray)
  }
>>>>>>> parent of b5c7703 (8287)

 const 따봉추가=()=>{       
    setClicked({isClicked:true});
 }

  function 반복된UI(){
    var 어레이=[];
    for(var i=0;i<3;i++){
      어레이.push(<div>Hello</div>)
    }
    return 어레이
  }
  

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
<<<<<<< HEAD
      <button
        onClick={() =>
          글제목변경(["여자 코드 추천", "강남 우동맛집", "리액트독학"])
        }
      >
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

     */}

      {글제목.map(function (글,i) {
        return (
          <div className="list" >
            <h3>   {글}
              <span key={글} 
                onClick={()=> 따봉변경(따봉 + 1)}
              >
                👍
              </span>  {따봉} {isClicked}
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
      {
        modal == true ? <Modal 글제목={글제목}></Modal> : null}

      {반복된UI()}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목}</h2>
      <p>날자</p>
      <p>상세내용</p>
=======
      <button onClick={ 제목바꾸기 }>    제목 변경</button>
      <button onClick={ 정렬하기 }>      정렬하기</button>
      

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
>>>>>>> parent of b5c7703 (8287)
    </div>
  );  
}

export default App;
