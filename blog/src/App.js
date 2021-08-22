import { blue } from 'chalk';
import './App.css';
import logo from './logo.svg';

function App() {
  let posts="강남 고기 맛집";
  
  function abc(){
    return 100
  }
  
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
        <h3>{posts}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );  
}

export default App;
